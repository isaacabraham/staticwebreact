namespace global

type IApi = { GetServerInfo : unit -> string Async }

module ApiRouting =
    let routeBuilder = sprintf "/api/%s/%s"