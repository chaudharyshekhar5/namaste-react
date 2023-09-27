const parent=React.createElement("div",{id:"parent"}, [
            React.createElement("div",{id:"child"},
                React.createElement("h1",{}, "hi react is to complicated")),
            React.createElement("div",{id:"child2"},
                React.createElement("h1",{}, "hi react is not to complicated"))])
        const root=ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)