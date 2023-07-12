import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);


export default function UCon() {
    const [themeVal, setThemeVal] = useState("light")

    return (
        <>
            <h1>Exm 1</h1>
            <button
                onClick={() => {
                    setThemeVal(themeVal === "light" ? ("dark") : "light")
                }}
            >Toggle theme</button>
            <ThemeContext.Provider value={themeVal}>
                <Form />
            </ThemeContext.Provider>
        </>
    );
}

function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = "panel-" + theme;
    const blackC = { color: "white", backgroundColor: "black" }
    return (
        <section className={className}>
            <h3 style={(theme == "dark") ? blackC : undefined}>{title}</h3>
            {children}
        </section>
    );
}

function Button({ children }) {
    const theme = useContext(ThemeContext);
    const blackC = { color: "white", backgroundColor: "black" }

    return <button style={(theme == "dark") ? blackC : undefined}>{children}</button>;
}
