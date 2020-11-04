module IsaacFunctions.SaturnHost

open System
open System.IO
open Microsoft.AspNetCore.Mvc
open Microsoft.Azure.WebJobs
open Microsoft.Azure.WebJobs.Extensions.Http
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.Logging
open Newtonsoft.Json

//[<FunctionName "SaturnHost">]
let run([<HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)>] req: HttpRequest, log:ILogger) =
    async {
        log.LogInformation("F# HTTP trigger function processed a request.")

        let! name =
            match req.Query.TryGetValue "name" with
            | true, value ->
                async { return value.ToString() }
            | false, _ ->
                async {
                    match Option.ofObj req.Body with
                    | None ->
                        return ""
                    | Some body ->
                        use reader = new StreamReader(body)
                        let! requestBody = reader.ReadToEndAsync() |> Async.AwaitTask
                        match Option.ofObj requestBody with
                        | None | Some "" ->
                            return ""
                        | Some body ->
                            let data = JsonConvert.DeserializeObject<Map<string,string>> body                            
                            return data.TryFind "name" |> Option.defaultValue ""
                }

        let responseMessage =
            if String.IsNullOrEmpty name then "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            else sprintf "Hello, %s. This HTTP triggered function executed successfully." name
        
        return OkObjectResult responseMessage
    } |> Async.StartAsTask