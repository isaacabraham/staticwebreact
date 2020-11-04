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
    { GetServerInfo =
        fun () ->
            { MachineName = Environment.MachineName
              UserName = Environment.UserName
              Time = DateTime.UtcNow } |> async.Return }

let webApp : HttpHandler =
    Remoting.createApi()
    |> Remoting.fromValue api
    |> Remoting.withRouteBuilder ApiRouting.routeBuilder
    |> Remoting.buildHttpHandler

[<FunctionName "Run">]
let run ([<HttpTrigger (AuthorizationLevel.Anonymous, Route = "{*any}")>] req : HttpRequest) = task {
    do! webApp (Some >> Task.FromResult) req.HttpContext :> Task
    return EmptyResult()
}