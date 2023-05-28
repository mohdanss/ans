// // create a compoent for code line
// type CodeLineProps = {
//     lineNumber: number,
//     // it will have everythig or null, so we can use it for comments, keywords, classes, etc
//     children: React.ReactNode
// }

// enum TOKEN_TYPE {
//     LINE_NUMBER = "_line_number",
//     COMMENT = "_comment",
//     KEYWORD = "_keyword",
//     CLASS = "_class",
//     OPERATOR = "_operator",
//     PROPERTY = "_property",
//     STRING = "_string",
//     TAB = "_tab",
//     DOT = "_dot",
//     SEMICOLON = "_semicolon",
//     ERROR = "_error",
// }

// enum TOKEN_COLOR {
//     LINE_NUMBER = "#464159",
//     COMMENT = "#6A9955",
//     KEYWORD = "#F89B40",
//     CLASS = "#05BFDB",
//     OPERATOR = "#767676",
//     PROPERTY = "#F5DF4D",
//     STRING = "#00C48C",
//     TAB = "#464159",
//     DOT = "#464159",
//     SEMICOLON = "#464159",
//     ERROR = "#FF3000",
// }

// const getTokenColor = (type: TOKEN_TYPE): TOKEN_COLOR => {
//     switch (type) {
//     case TOKEN_TYPE.LINE_NUMBER:
//         return TOKEN_COLOR.LINE_NUMBER;
//     case TOKEN_TYPE.COMMENT:
//         return TOKEN_COLOR.COMMENT;
//     case TOKEN_TYPE.KEYWORD:
//         return TOKEN_COLOR.KEYWORD;
//     case TOKEN_TYPE.CLASS:
//         return TOKEN_COLOR.CLASS;
//     case TOKEN_TYPE.OPERATOR:
//         return TOKEN_COLOR.OPERATOR;
//     case TOKEN_TYPE.PROPERTY:
//         return TOKEN_COLOR.PROPERTY;
//     case TOKEN_TYPE.STRING:
//         return TOKEN_COLOR.STRING;
//     case TOKEN_TYPE.TAB:
//         return TOKEN_COLOR.TAB;
//     case TOKEN_TYPE.DOT:
//         return TOKEN_COLOR.DOT;
//     case TOKEN_TYPE.SEMICOLON:
//         return TOKEN_COLOR.SEMICOLON;
//     default:
//         return TOKEN_COLOR.ERROR;
//     }
// };

// class Token {
//     type: TOKEN_TYPE;
//     color: TOKEN_COLOR;
//     content: string;
//     value: React.ReactNode;

//     constructor(type: TOKEN_TYPE, content: string) {
//         this.type = type;
//         this.content = content;
//         this.color = getTokenColor(type);
//         this.value = React.createElement("span", { style: { color: this.color } }, this.content);
//     }
// }

// class CodeLine {
//     tokens: Token[];

//     constructor(tokens: Token[]) {
//         this.tokens = tokens;
//     }

//     // ADD TOKEN TO THE END OF THE LINE
//     addToken(token: Token): void {
//         this.tokens.push(token);
//     }
// }

// class Code {
//     lines: CodeLine[];

//     constructor(lines: CodeLine[]) {
//         this.lines = lines;
//     }

//     // ADD LINE TO THE END OF THE CODE
//     addLine(line: CodeLine): void {
//         this.lines.push(line);
//     }
// }

// const convertLineToJSX = (line: CodeLine, lineNumber: Number): React.ReactElement => {
//     const tokens: React.ReactElement[] = [];
//     for (const token of line.tokens) {
//         tokens.push(
//             <span style={{ color: token.color }}>{token.content}</span>
//         );
//     }

//     return (
//         <div className="code-line">
//             <span className="line-number" style={{ color: TOKEN_COLOR.LINE_NUMBER }}>{lineNumber.toString()}.</span>
//             {tokens}
//         </div>
//     );
// };

// create a class named Ans
class Ans {
    name = "Muhammad Ans";
    dateOfBirth = new Date("2001-05-02");

    education = {
        degree: "Bachelors of Science in Information Technology",
        school: "University of the Punjab, Lahore",
        department: "PUCIT",
        year: "2019 - 2023"
    };

    skills = [
        "Problem Solving",
        "Web Engineering",
        "Mobile Engineering",
        "UI/UX Designing"
    ];

    socialMediaLinks = [
        {
            linkedIn: "mohdans",
            github: "mohdanss",
        }
    ];

    contact = {
        email: "mohd.ans.riaz@gmail.com",
        phone: "+92 308 5062 108",
        address: "Lahore, Pakistan"
    };

    workExperience = {
        freelance: {
            title: "UI/UX Designer & Frontend Engineer",
            company: "Fiverr & Upwork",
            duration: "2020 - Present",
        }
    };

    projects = "view my projects on GitHub";
}