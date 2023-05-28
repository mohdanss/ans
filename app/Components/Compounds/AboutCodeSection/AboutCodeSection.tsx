import React from 'react';
import './AboutCodeSection.styles.css';
import { Highlight, themes } from "prism-react-renderer";
import aboutMeCode from "@/app/MetaData/AboutMe.data";

type Props = {};

const AboutCodeSection = (props: Props) => {
    return (
        <>
            <VSCodeHeader />
            <div className="vscode-body">
                <div className="body-content">
                    <Highlight
                        theme={themes.github}
                        code={aboutMeCode}
                        language="jsx"
                    >
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre style={style} className="codeBlock">
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line })} className="line" style={{ animationDelay: `${i * 0.1}s` }}>
                                        <span className="lineNumber">{i + 1}</span>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
            </div >
        </>
    );
}

const VSCodeHeader = (props: Props) => {
    return (
        <div className="vscode-header">
            <div className="vscode-header-buttons">
                <div className="vscode-header-button vscode-header-button-close"></div>
                <div className="vscode-header-button vscode-header-button-minimize"></div>
                <div className="vscode-header-button vscode-header-button-maximize"></div>
            </div>
            <div className="vscode-header-filename">
                <span className="vscode-header-filename-text">Ans.js</span>
            </div>
        </div>
    );
}

export default AboutCodeSection;