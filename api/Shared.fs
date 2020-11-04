namespace global

open System

type ServerDetails =
    { MachineName : string
      UserName : string
      Time : DateTime }

type IApi = { GetServerInfo : unit -> ServerDetails Async }

module ApiRouting =
    let routeBuilder = sprintf "/api/%s/%s"