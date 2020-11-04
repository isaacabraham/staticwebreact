module App

open Browser.Dom
open Fable.Remoting.Client
open Fable.Core

let api =
  Remoting.createApi()
  |> Remoting.withRouteBuilder ApiRouting.routeBuilder
  |> Remoting.buildProxy<IApi>

// Get a reference to our button and cast the Element to an HTMLButtonElement
let myButton = document.querySelector(".my-button") :?> Browser.Types.HTMLButtonElement

let getData() = promise {
    let! response = api.GetServerInfo() |> Async.StartAsPromise
    let text = sprintf "%O: %s on %s says hello!" response.Time response.UserName response.MachineName
    myButton.innerText <- text
}

// Register our listener
myButton.onclick <- fun _ -> getData()

