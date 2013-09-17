//ProFormTool ver 0.1
//An extension for https://github.com/adobe/brackets
//This extension currently not available for use so is incompletely.

define(function (require, exports, module)
{
    "use strict";
	
	var EditorManager = brackets.getModule("editor/EditorManager");
		
    function proFormToolProvider(hostEditor, pos)
    {
        var proformtoolline, result, start, end;
        pos.ch = start;
        hostEditor.setSelection(pos, { line: pos.line, ch: end });
        proformtoolline.load(hostEditor);
        result = new $.Deferred();
        result.resolve(proformtoolline);
        return result.promise();
    }
    
    EditorManager.registerInlineEditProvider(proFormToolProvider);
    exports.proFormToolProvider = proFormToolProvider;
});