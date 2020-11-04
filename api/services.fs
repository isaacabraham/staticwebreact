module SaturnFuncs.Services

open Giraffe
open Saturn
open System.Threading.Tasks
open FSharp.Control.Tasks.V2

open Microsoft.Azure.WebJobs
open Microsoft.Azure.WebJobs.Extensions.Http
open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.Http

let webApp = router {
    get "/api/" (text "Saturn!")
    get "/api/gir" (text "GIRAFFE!")
}

[<FunctionName "Run">]
let run ([<HttpTrigger (AuthorizationLevel.Anonymous, Route = "{*any}")>] req : HttpRequest) = task {
    do! webApp (Some >> Task.FromResult) req.HttpContext :> Task
    return EmptyResult()
}