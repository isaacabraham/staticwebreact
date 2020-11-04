module SaturnFuncs.Services

open Giraffe
open Fable.Remoting.Server
open Fable.Remoting.Giraffe
open Saturn

open FSharp.Control.Tasks.V2
open Microsoft.Azure.WebJobs
open Microsoft.Azure.WebJobs.Extensions.Http
open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.Http
open System.Threading.Tasks
open System

let api : IApi =
    { GetServerInfo = fun () -> sprintf "%O: Hello from Saturn and ASP .NET!" DateTime.UtcNow |> async.Return }

let webApp : HttpHandler =
    Remoting.createApi()
    |> Remoting.fromValue api
    |> Remoting.buildHttpHandler

[<FunctionName "Run">]
let run ([<HttpTrigger (AuthorizationLevel.Anonymous, Route = "{*any}")>] req : HttpRequest) = task {
    do! webApp (Some >> Task.FromResult) req.HttpContext :> Task
    return EmptyResult()
}