import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);


export default function UCon() {
    const [themeVal, setThemeVal] = useState("light")

    return (
        <>
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
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ children }) {
    const theme = useContext(ThemeContext);
    const blackC = { color: "white", backgroundColor: "black" }

    return <button style={(theme == "dark") ? blackC : undefined}>{children}</button>;
}
