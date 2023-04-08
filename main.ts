import { Plugin, Editor } from "obsidian";

export default class NewLinePlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: "insert-line-below",
            name: "Insert line below",
            editorCallback: (editor: Editor) => {
                const pos = editor.getCursor();
                const line = editor.getLine(pos.line);

                editor.setLine(pos.line, (line + "\n"));
                editor.setCursor({
                    line: pos.line+1,
                    ch:0
                });
            },
        });
    }
}