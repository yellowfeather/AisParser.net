using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace AisParser.net;

public class HttpTrigger
{
    public class Query
    {
        public string AisMessage { get; set; }
    }

    private readonly ILogger _logger;

    public HttpTrigger(ILoggerFactory loggerFactory)
    {
        _logger = loggerFactory.CreateLogger<HttpTrigger>();
    }

    [Function("parse")]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequestData req)
    {
        var query = await JsonSerializer.DeserializeAsync<Query>(req.Body);
        var aisMessage = query?.AisMessage;

        if (string.IsNullOrEmpty(aisMessage)) {
            var problemDetails = new ProblemDetails
            {
                Status = HttpStatusCode.BadRequest,
                Type = "https://httpstatuses.com/400",
                Title = "aisMessage not specified.",
                Detail = "Specify the aisMessage to be decoded in the request body.",
                Instance = req.Url.AbsolutePath
            };
            var response = req.CreateResponse(HttpStatusCode.BadRequest);
            await response.WriteAsJsonAsync(problemDetails);
            return response;
        }

        try {
            var parser = new Parser();
            var message = parser.Parse(aisMessage);
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(message);
            return response;
        }
        catch (Exception ex) {
            var problemDetails = new ProblemDetails
            {
                Status = HttpStatusCode.UnprocessableEntity,
                Type = "https://httpstatuses.com/422",
                Title = "An error occurred parsing the specified aisMessage.",
                Detail = ex.Message,
                Instance = req.Url.AbsolutePath
            };

            _logger.LogError($"Exception parsing message: {aisMessage}", ex);
            var response = req.CreateResponse(HttpStatusCode.UnprocessableEntity);
            await response.WriteAsJsonAsync(problemDetails);
            return response;
        }
    }
}

public record ProblemDetails
{
    public object Status { get; set; }
    public string Type { get; set; }
    public string Title { get; set; }
    public string Detail { get; set; }
    public string Instance { get; set; }
}