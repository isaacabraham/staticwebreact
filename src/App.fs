module App

open Browser.Dom
open Fable.Remoting.Client
open Fable.Core

// Mutable variable to count the number of times we clicked the button
let mutable count = 0

let api =
  Remoting.createApi()
  |> Remoting.buildProxy<IApi>

// Get a reference to our button and cast the Element to an HTMLButtonElement
let myButton = document.querySelector(".my-button") :?> Browser.Types.HTMLButtonElement

let getData() = promise {
    let! text = api.GetServerInfo() |> Async.StartAsPromise
    myButton.innerText <- text
}

// Register our listener
myButton.onclick <- fun _ -> getData()

