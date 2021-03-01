using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AisParser.net
{
    public static class Parse
    {
        [FunctionName("parse")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string aisMessage = req.Query["aisMessage"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            aisMessage = aisMessage ?? data?.aisMessage;

            if (string.IsNullOrEmpty(aisMessage)) {
                var problemDetails = new ProblemDetails
                {
                    Status = StatusCodes.Status400BadRequest,
                    Title = "aisMessage not specified.",
                    Detail = "Specify the aisMessage to be decoded in the request body.",
                    Instance = req.Path
                };
                return new BadRequestObjectResult(problemDetails);
            }

            try {
                var parser = new AisParser.Parser();
                var message = parser.Parse(aisMessage);
                return new OkObjectResult(message);
            }
            catch (Exception ex) {
                var problemDetails = new ProblemDetails
                {
                    Status = StatusCodes.Status422UnprocessableEntity,
                    Title = "An error occurred parsing the specified aisMessage.",
                    Detail = ex.Message,
                    Instance = req.Path
                };

                log.LogError($"Exception parsing message: {aisMessage}", ex);
                return new UnprocessableEntityObjectResult(problemDetails);
            }
        }
    }
}
