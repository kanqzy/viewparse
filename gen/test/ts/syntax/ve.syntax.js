var Ve;
(function (Ve) {
    var Lang;
    (function (Lang) {
        let SymbolType;
        (function (SymbolType) {
            SymbolType[SymbolType["statement"] = 0] = "statement";
            SymbolType[SymbolType["constant"] = 1] = "constant";
            SymbolType[SymbolType["accessor"] = 2] = "accessor";
            SymbolType[SymbolType["declaration"] = 3] = "declaration";
            SymbolType[SymbolType["unary"] = 4] = "unary";
            SymbolType[SymbolType["tertiary"] = 5] = "tertiary";
            SymbolType[SymbolType["binary"] = 6] = "binary";
            SymbolType[SymbolType["block"] = 7] = "block";
            SymbolType[SymbolType["closeBlock"] = 8] = "closeBlock";
            SymbolType[SymbolType["modifier"] = 9] = "modifier";
            SymbolType[SymbolType["multiple"] = 10] = "multiple";
            SymbolType[SymbolType["quote"] = 11] = "quote";
            SymbolType[SymbolType["escape"] = 12] = "escape";
            SymbolType[SymbolType["keyWord"] = 13] = "keyWord";
        })(SymbolType = Lang.SymbolType || (Lang.SymbolType = {}));
        let OperatorDirection;
        (function (OperatorDirection) {
            OperatorDirection[OperatorDirection["left"] = 0] = "left";
            OperatorDirection[OperatorDirection["right"] = 1] = "right";
        })(OperatorDirection = Lang.OperatorDirection || (Lang.OperatorDirection = {}));
        let VeName;
        (function (VeName) {
            VeName[VeName["FOR"] = 0] = "FOR";
            VeName[VeName["WHILE"] = 1] = "WHILE";
            VeName[VeName["DO"] = 2] = "DO";
            VeName[VeName["IF"] = 3] = "IF";
            VeName[VeName["ELSE"] = 4] = "ELSE";
            VeName[VeName["ELSE_ZH"] = 5] = "ELSE_ZH";
            VeName[VeName["ELSEIF"] = 6] = "ELSEIF";
            VeName[VeName["SWITCH"] = 7] = "SWITCH";
            VeName[VeName["CASE"] = 8] = "CASE";
            VeName[VeName["DEFAULT"] = 9] = "DEFAULT";
            VeName[VeName["TRY"] = 10] = "TRY";
            VeName[VeName["CATCH"] = 11] = "CATCH";
            VeName[VeName["FINALLY"] = 12] = "FINALLY";
            VeName[VeName["CONTINUE"] = 13] = "CONTINUE";
            VeName[VeName["BREAK"] = 14] = "BREAK";
            VeName[VeName["RETURN"] = 15] = "RETURN";
            VeName[VeName["THROW"] = 16] = "THROW";
            VeName[VeName["ASYNC"] = 17] = "ASYNC";
            VeName[VeName["AWAIT"] = 18] = "AWAIT";
            VeName[VeName["NULL_LITERAL"] = 19] = "NULL_LITERAL";
            VeName[VeName["TRUE_LITERAL"] = 20] = "TRUE_LITERAL";
            VeName[VeName["FALSE_LITERAL"] = 21] = "FALSE_LITERAL";
            VeName[VeName["AS"] = 22] = "AS";
            VeName[VeName["IS"] = 23] = "IS";
            VeName[VeName["NEW"] = 24] = "NEW";
            VeName[VeName["MATCH"] = 25] = "MATCH";
            VeName[VeName["CONTAIN"] = 26] = "CONTAIN";
            VeName[VeName["STATR"] = 27] = "STATR";
            VeName[VeName["END"] = 28] = "END";
            VeName[VeName["EXTENDS"] = 29] = "EXTENDS";
            VeName[VeName["K_EQ"] = 30] = "K_EQ";
            VeName[VeName["K_AND"] = 31] = "K_AND";
            VeName[VeName["K_OR"] = 32] = "K_OR";
            VeName[VeName["K_XOR"] = 33] = "K_XOR";
            VeName[VeName["SUPER"] = 34] = "SUPER";
            VeName[VeName["THIS"] = 35] = "THIS";
            VeName[VeName["VALUE"] = 36] = "VALUE";
            VeName[VeName["GET"] = 37] = "GET";
            VeName[VeName["SET"] = 38] = "SET";
            VeName[VeName["FUN"] = 39] = "FUN";
            VeName[VeName["CLASS"] = 40] = "CLASS";
            VeName[VeName["PACKAGE"] = 41] = "PACKAGE";
            VeName[VeName["USE"] = 42] = "USE";
            VeName[VeName["DEF"] = 43] = "DEF";
            VeName[VeName["INTERFACE"] = 44] = "INTERFACE";
            VeName[VeName["ENUM"] = 45] = "ENUM";
            VeName[VeName["PUBLIC"] = 46] = "PUBLIC";
            VeName[VeName["PRIVATE"] = 47] = "PRIVATE";
            VeName[VeName["PROTECTED"] = 48] = "PROTECTED";
            VeName[VeName["SEALED"] = 49] = "SEALED";
            VeName[VeName["CONST"] = 50] = "CONST";
            VeName[VeName["STATIC"] = 51] = "STATIC";
            VeName[VeName["READONLY"] = 52] = "READONLY";
            VeName[VeName["OVERRIDE"] = 53] = "OVERRIDE";
            VeName[VeName["EXPORT"] = 54] = "EXPORT";
            VeName[VeName["IN"] = 55] = "IN";
            VeName[VeName["LPAREN"] = 56] = "LPAREN";
            VeName[VeName["RPAREN"] = 57] = "RPAREN";
            VeName[VeName["LBRACK"] = 58] = "LBRACK";
            VeName[VeName["RBRACK"] = 59] = "RBRACK";
            VeName[VeName["LBRACE"] = 60] = "LBRACE";
            VeName[VeName["STRING_LBRACE"] = 61] = "STRING_LBRACE";
            VeName[VeName["RBRACE"] = 62] = "RBRACE";
            VeName[VeName["COLON"] = 63] = "COLON";
            VeName[VeName["SEMICOLON"] = 64] = "SEMICOLON";
            VeName[VeName["PERIOD"] = 65] = "PERIOD";
            VeName[VeName["NULL_PERIOD"] = 66] = "NULL_PERIOD";
            VeName[VeName["ELLIPSIS"] = 67] = "ELLIPSIS";
            VeName[VeName["CONDITIONAL"] = 68] = "CONDITIONAL";
            VeName[VeName["INC"] = 69] = "INC";
            VeName[VeName["DEC"] = 70] = "DEC";
            VeName[VeName["ARROW"] = 71] = "ARROW";
            VeName[VeName["ASSIGN"] = 72] = "ASSIGN";
            VeName[VeName["ASSIGN_ADD"] = 73] = "ASSIGN_ADD";
            VeName[VeName["ASSIGN_SUB"] = 74] = "ASSIGN_SUB";
            VeName[VeName["ASSIGN_MUL"] = 75] = "ASSIGN_MUL";
            VeName[VeName["ASSIGN_DIV"] = 76] = "ASSIGN_DIV";
            VeName[VeName["ASSIGN_MOD"] = 77] = "ASSIGN_MOD";
            VeName[VeName["ASSIGN_EXP"] = 78] = "ASSIGN_EXP";
            VeName[VeName["COMMA"] = 79] = "COMMA";
            VeName[VeName["OR"] = 80] = "OR";
            VeName[VeName["AND"] = 81] = "AND";
            VeName[VeName["XOR"] = 82] = "XOR";
            VeName[VeName["ADD"] = 83] = "ADD";
            VeName[VeName["SUB"] = 84] = "SUB";
            VeName[VeName["MUL"] = 85] = "MUL";
            VeName[VeName["DIV"] = 86] = "DIV";
            VeName[VeName["MOD"] = 87] = "MOD";
            VeName[VeName["EXP"] = 88] = "EXP";
            VeName[VeName["EQ"] = 89] = "EQ";
            VeName[VeName["NOT"] = 90] = "NOT";
            VeName[VeName["NE"] = 91] = "NE";
            VeName[VeName["LT"] = 92] = "LT";
            VeName[VeName["GT"] = 93] = "GT";
            VeName[VeName["LTE"] = 94] = "LTE";
            VeName[VeName["GTE"] = 95] = "GTE";
            VeName[VeName["COMMENT"] = 96] = "COMMENT";
            VeName[VeName["COMMENT_BLOCK"] = 97] = "COMMENT_BLOCK";
            VeName[VeName["COMMENT_CLOSEBLOCK"] = 98] = "COMMENT_CLOSEBLOCK";
            VeName[VeName["SINGLE_QUOTE"] = 99] = "SINGLE_QUOTE";
            VeName[VeName["DOUBLE_QUOTE"] = 100] = "DOUBLE_QUOTE";
            VeName[VeName["ESCAPTE"] = 101] = "ESCAPTE";
        })(VeName = Lang.VeName || (Lang.VeName = {}));
        let VeBaseType;
        (function (VeBaseType) {
            VeBaseType[VeBaseType["Null"] = 0] = "Null";
            VeBaseType[VeBaseType["Any"] = 1] = "Any";
            VeBaseType[VeBaseType["Void"] = 2] = "Void";
            VeBaseType[VeBaseType["String"] = 3] = "String";
            VeBaseType[VeBaseType["Int"] = 4] = "Int";
            VeBaseType[VeBaseType["Number"] = 5] = "Number";
            VeBaseType[VeBaseType["Bool"] = 6] = "Bool";
            VeBaseType[VeBaseType["Array"] = 7] = "Array";
            VeBaseType[VeBaseType["Date"] = 8] = "Date";
            VeBaseType[VeBaseType["Color"] = 9] = "Color";
            VeBaseType[VeBaseType["Url"] = 10] = "Url";
            VeBaseType[VeBaseType["Path"] = 11] = "Path";
            VeBaseType[VeBaseType["Regex"] = 12] = "Regex";
            VeBaseType[VeBaseType["Font"] = 13] = "Font";
            VeBaseType[VeBaseType["Point"] = 14] = "Point";
            VeBaseType[VeBaseType["Object"] = 15] = "Object";
            VeBaseType[VeBaseType["Dir"] = 16] = "Dir";
            VeBaseType[VeBaseType["Image"] = 17] = "Image";
            VeBaseType[VeBaseType["File"] = 18] = "File";
        })(VeBaseType = Lang.VeBaseType || (Lang.VeBaseType = {}));
        let VeBaseTypeKind;
        (function (VeBaseTypeKind) {
            VeBaseTypeKind[VeBaseTypeKind["value"] = 0] = "value";
            VeBaseTypeKind[VeBaseTypeKind["ref"] = 1] = "ref";
        })(VeBaseTypeKind = Lang.VeBaseTypeKind || (Lang.VeBaseTypeKind = {}));
        let language;
        (function (language) {
            language[language["en"] = 0] = "en";
            language[language["zh"] = 1] = "zh";
        })(language = Lang.language || (Lang.language = {}));
        class _VeSyntax {
            constructor() {
                this.keywords = new Lang.VeArray;
                this.operators = new Lang.VeArray;
                this.blocks = new Lang.VeArray;
                this.typeMaps = new Lang.VeArray;
                this.word = /^[a-zA-Z_\$\u4E00-\u9FA5][a-zA-Z_\$\u4E00-\u9FA5\d]*/;
                this.unit = '([a-zA-Z_\\\$\\\u4E00-\\\u9FA5][a-zA-Z_\\\$\\\u4E00-\\\u9FA5\\\d]*)';
                this.notWord = /[^a-zA-Z_\$\u4E00-\u9FA5\d]+/;
                this.number = /\d+(\.[\d]+)?(e[\d]+)?/;
                var K = (name, string, type, precedence, lang, direction) => {
                    if (typeof precedence == typeof undefined)
                        precedence = -1;
                    if (typeof direction == typeof undefined)
                        direction = OperatorDirection.left;
                    this.keywords.append({ name, string, type: Lang.VeArray.asVeArray(type), precedence, lang: lang || language.en, direction });
                };
                var O = (name, string, type, precedence, lang, direction) => {
                    if (typeof precedence == typeof undefined)
                        precedence = -1;
                    if (typeof direction == typeof undefined)
                        direction = OperatorDirection.left;
                    this.operators.append({ name, string, type: Lang.VeArray.asVeArray(type), precedence, lang: lang || language.en, direction });
                };
                var T = (type, kind, covariance, contravariance) => {
                    this.typeMaps.push({ type, kind, covariance, contravariance });
                };
                K(VeName.FOR, "for", SymbolType.statement);
                K(VeName.WHILE, 'while', SymbolType.statement);
                K(VeName.DO, "do", SymbolType.statement);
                K(VeName.IF, "if", SymbolType.statement);
                K(VeName.ELSE, "else", SymbolType.statement);
                K(VeName.SWITCH, "switch", SymbolType.statement);
                K(VeName.CASE, "case", SymbolType.statement);
                K(VeName.DEFAULT, 'default', SymbolType.statement);
                K(VeName.TRY, "try", SymbolType.statement);
                K(VeName.CATCH, "catch", SymbolType.statement);
                K(VeName.FINALLY, "finally", SymbolType.statement);
                K(VeName.CONTINUE, 'continue', SymbolType.statement);
                K(VeName.BREAK, 'break', SymbolType.statement);
                K(VeName.RETURN, 'return', SymbolType.statement);
                K(VeName.THROW, "throw", SymbolType.statement);
                K(VeName.TRUE_LITERAL, "true", SymbolType.constant);
                K(VeName.FALSE_LITERAL, "false", SymbolType.constant);
                K(VeName.NULL_LITERAL, "null", SymbolType.constant);
                O(VeName.AS, "as", [SymbolType.binary, SymbolType.keyWord], 9);
                O(VeName.IS, "is", [SymbolType.binary, SymbolType.keyWord], 9);
                O(VeName.NEW, "new", [SymbolType.unary, SymbolType.keyWord], 15);
                O(VeName.AND, "and", [SymbolType.binary, SymbolType.keyWord], 4);
                O(VeName.OR, "or", [SymbolType.binary, SymbolType.keyWord], 5);
                O(VeName.XOR, "xor", [SymbolType.binary, SymbolType.keyWord], 7);
                K(VeName.SUPER, "super", SymbolType.accessor);
                K(VeName.THIS, "this", SymbolType.accessor);
                K(VeName.VALUE, "value", SymbolType.accessor);
                K(VeName.GET, "get", [SymbolType.accessor, SymbolType.modifier]);
                K(VeName.SET, "set", [SymbolType.accessor, SymbolType.modifier]);
                K(VeName.FUN, "fun", [SymbolType.declaration]);
                K(VeName.CLASS, "class", SymbolType.declaration);
                K(VeName.INTERFACE, "interface", SymbolType.declaration);
                K(VeName.EXTENDS, "extends", SymbolType.declaration);
                K(VeName.PACKAGE, "package", SymbolType.declaration);
                K(VeName.USE, "use", SymbolType.declaration);
                K(VeName.DEF, "def", SymbolType.declaration);
                K(VeName.ENUM, "enum", SymbolType.declaration);
                K(VeName.PUBLIC, "public", SymbolType.modifier);
                K(VeName.PRIVATE, "private", SymbolType.modifier);
                K(VeName.PROTECTED, "protected", SymbolType.modifier);
                K(VeName.SEALED, "sealed", SymbolType.modifier);
                K(VeName.CONST, "const", [SymbolType.declaration, SymbolType.modifier]);
                K(VeName.STATIC, "static", SymbolType.modifier);
                K(VeName.READONLY, "readonly", SymbolType.modifier);
                K(VeName.OVERRIDE, "override", SymbolType.modifier);
                K(VeName.EXPORT, 'export', SymbolType.modifier);
                K(VeName.IN, "in", SymbolType.modifier);
                O(VeName.LPAREN, "(", SymbolType.block, 16);
                O(VeName.RPAREN, ")", SymbolType.closeBlock, 0);
                O(VeName.LBRACK, "[", SymbolType.block, 16);
                O(VeName.RBRACK, "]", SymbolType.closeBlock, 0);
                O(VeName.LBRACE, "{", SymbolType.block, 4);
                O(VeName.STRING_LBRACE, '@{', SymbolType.block, 0);
                O(VeName.RBRACE, "}", SymbolType.closeBlock, 0);
                O(VeName.COLON, ":", SymbolType.binary, 3);
                O(VeName.SEMICOLON, ";", SymbolType.statement, 0);
                O(VeName.PERIOD, ".", SymbolType.binary, 16);
                O(VeName.ELLIPSIS, "...", SymbolType.modifier, 2);
                O(VeName.CONDITIONAL, "?", SymbolType.tertiary, 3, undefined, OperatorDirection.right);
                O(VeName.INC, "++", SymbolType.unary, 0, undefined, OperatorDirection.right);
                O(VeName.DEC, "--", SymbolType.unary, 0, undefined, OperatorDirection.right);
                O(VeName.ARROW, "=>", SymbolType.binary, 0, undefined, OperatorDirection.right);
                O(VeName.ASSIGN, "=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_ADD, "+=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_SUB, "-=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_MUL, "*=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_DIV, "/=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_MOD, "%=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.ASSIGN_EXP, "**=", SymbolType.binary, 2, undefined, OperatorDirection.right);
                O(VeName.COMMA, ",", SymbolType.multiple, 1);
                O(VeName.OR, "||", SymbolType.binary, 4);
                O(VeName.AND, "&&", SymbolType.binary, 5);
                O(VeName.XOR, "&|", SymbolType.binary, 7);
                O(VeName.ADD, "+", SymbolType.binary, 12);
                O(VeName.SUB, "-", SymbolType.binary, 12);
                O(VeName.MUL, "*", SymbolType.binary, 13);
                O(VeName.DIV, "/", SymbolType.binary, 13);
                O(VeName.MOD, "%", SymbolType.binary, 13);
                O(VeName.EXP, "**", SymbolType.binary, 14);
                O(VeName.EQ, "==", SymbolType.binary, 9);
                O(VeName.NE, "!=", SymbolType.binary, 9);
                O(VeName.NOT, "!", SymbolType.unary, 15, undefined, OperatorDirection.right);
                O(VeName.LT, "<", [SymbolType.block, SymbolType.binary], 10);
                O(VeName.GT, ">", [SymbolType.closeBlock, SymbolType.binary], 10);
                O(VeName.LTE, "<=", SymbolType.binary, 10);
                O(VeName.GTE, ">=", SymbolType.binary, 10);
                O(VeName.COMMENT, "//", SymbolType.block);
                O(VeName.COMMENT_BLOCK, "/*", SymbolType.block);
                O(VeName.COMMENT_CLOSEBLOCK, "*/", SymbolType.closeBlock);
                O(VeName.SINGLE_QUOTE, "'", SymbolType.quote);
                O(VeName.DOUBLE_QUOTE, "\"", SymbolType.quote);
                O(VeName.ESCAPTE, "\\", SymbolType.escape);
                K(VeName.FOR, "环", SymbolType.statement, undefined, language.zh);
                K(VeName.WHILE, '当', SymbolType.statement, undefined, language.zh);
                K(VeName.DO, "执行", SymbolType.statement, undefined, language.zh);
                K(VeName.IF, "若", SymbolType.statement, undefined, language.zh);
                K(VeName.ELSE_ZH, "否则", SymbolType.statement, undefined, language.zh);
                K(VeName.ELSEIF, "如若", SymbolType.statement, undefined, language.zh);
                K(VeName.SWITCH, "匹", SymbolType.statement, undefined, language.zh);
                K(VeName.CASE, "配", SymbolType.statement, undefined, language.zh);
                K(VeName.DEFAULT, '归', SymbolType.statement, undefined, language.zh);
                K(VeName.TRY, "捕", SymbolType.statement, undefined, language.zh);
                K(VeName.CATCH, "获", SymbolType.statement, undefined, language.zh);
                K(VeName.FINALLY, "终", SymbolType.statement, undefined, language.zh);
                K(VeName.CONTINUE, '中止', SymbolType.statement, undefined, language.zh);
                K(VeName.BREAK, '中断', SymbolType.statement, undefined, language.zh);
                K(VeName.RETURN, '返回', SymbolType.statement, undefined, language.zh);
                K(VeName.THROW, "扔", SymbolType.statement, undefined, language.zh);
                K(VeName.TRUE_LITERAL, "是", SymbolType.constant, undefined, language.zh);
                K(VeName.FALSE_LITERAL, "否", SymbolType.constant, undefined, language.zh);
                K(VeName.NULL_LITERAL, "空", SymbolType.constant, undefined, language.zh);
                O(VeName.AS, "为", [SymbolType.binary, SymbolType.keyWord], 9, language.zh);
                O(VeName.IS, "似", [SymbolType.binary, SymbolType.keyWord], 9, language.zh);
                O(VeName.NEW, "初", [SymbolType.unary, SymbolType.keyWord], 15, language.zh);
                O(VeName.AND, "且", [SymbolType.binary, SymbolType.keyWord], 4, language.zh);
                O(VeName.OR, "或", [SymbolType.binary, SymbolType.keyWord], 5, language.zh);
                O(VeName.XOR, "异或", [SymbolType.binary, SymbolType.keyWord], 7, language.zh);
                K(VeName.SUPER, "父", SymbolType.accessor, undefined, language.zh);
                K(VeName.THIS, "本", SymbolType.accessor, undefined, language.zh);
                K(VeName.VALUE, "值", SymbolType.accessor, undefined, language.zh);
                K(VeName.GET, "取", [SymbolType.accessor, SymbolType.modifier], undefined, language.zh);
                K(VeName.SET, "放", [SymbolType.accessor, SymbolType.modifier], undefined, language.zh);
                K(VeName.FUN, "法", [SymbolType.declaration], undefined, language.zh);
                K(VeName.CLASS, "类", SymbolType.declaration, undefined, language.zh);
                K(VeName.INTERFACE, "接口", SymbolType.declaration, undefined, language.zh);
                K(VeName.EXTENDS, "继承", SymbolType.declaration, undefined, language.zh);
                K(VeName.PACKAGE, "包", SymbolType.declaration, undefined, language.zh);
                K(VeName.USE, "引用", SymbolType.declaration, undefined, language.zh);
                K(VeName.DEF, "定义", SymbolType.declaration, undefined, language.zh);
                K(VeName.ENUM, "枚举", SymbolType.declaration, undefined, language.zh);
                K(VeName.PUBLIC, "公开", SymbolType.modifier, undefined, language.zh);
                K(VeName.PRIVATE, "私有", SymbolType.modifier, undefined, language.zh);
                K(VeName.PROTECTED, "保护", SymbolType.modifier, undefined, language.zh);
                K(VeName.SEALED, "密封", SymbolType.modifier, undefined, language.zh);
                K(VeName.CONST, "常量", [SymbolType.declaration, SymbolType.modifier], undefined, language.zh);
                K(VeName.STATIC, "静量", SymbolType.modifier, undefined, language.zh);
                K(VeName.READONLY, "只读", SymbolType.modifier, undefined, language.zh);
                K(VeName.OVERRIDE, "重载", SymbolType.modifier, undefined, language.zh);
                K(VeName.IN, "内", SymbolType.modifier, undefined, language.zh);
                O(VeName.LPAREN, "（", SymbolType.block, 16, language.zh);
                O(VeName.RPAREN, "）", SymbolType.closeBlock, 0, language.zh);
                O(VeName.LBRACK, "【", SymbolType.block, 16, language.zh);
                O(VeName.RBRACK, "】", SymbolType.closeBlock, 0, language.zh);
                O(VeName.COLON, "：", SymbolType.binary, 3, language.zh);
                O(VeName.SEMICOLON, "；", SymbolType.statement, 0, language.zh);
                O(VeName.PERIOD, "@", SymbolType.binary, 16, language.zh);
                O(VeName.ELLIPSIS, "……", SymbolType.modifier, 2, language.zh);
                O(VeName.CONDITIONAL, "？", SymbolType.tertiary, 3, language.zh);
                O(VeName.ARROW, "=》", SymbolType.binary, 0, language.zh);
                O(VeName.ASSIGN_DIV, "~=", SymbolType.binary, 2, language.zh);
                O(VeName.COMMA, "，", SymbolType.multiple, 1, language.zh);
                O(VeName.DIV, "~", SymbolType.binary, 13, language.zh);
                O(VeName.NE, "！=", SymbolType.binary, 9, language.zh);
                O(VeName.NOT, "！", SymbolType.unary, 15, language.zh);
                O(VeName.LT, "《", [SymbolType.block, SymbolType.binary], 10, language.zh);
                O(VeName.GT, "》", [SymbolType.closeBlock, SymbolType.binary], 10, language.zh);
                O(VeName.LTE, "《=", SymbolType.binary, 10, language.zh);
                O(VeName.GTE, "》=", SymbolType.binary, 10, language.zh);
                O(VeName.NE, "不等于", [SymbolType.binary, SymbolType.keyWord], 9, language.zh);
                O(VeName.LT, "小于", [SymbolType.binary, SymbolType.keyWord], 10, language.zh);
                O(VeName.GT, "大于", [SymbolType.binary, SymbolType.keyWord], 10, language.zh);
                O(VeName.LTE, "小于等于", [SymbolType.binary, SymbolType.keyWord], 10, language.zh);
                O(VeName.GTE, "大于等于", [SymbolType.binary, SymbolType.keyWord], 10, language.zh);
                O(VeName.COMMENT, "##", SymbolType.block, undefined, language.zh);
                O(VeName.COMMENT_BLOCK, "#*", SymbolType.block, undefined, language.zh);
                O(VeName.COMMENT_CLOSEBLOCK, "*#", SymbolType.closeBlock, undefined, language.zh);
                O(VeName.SINGLE_QUOTE, "‘", SymbolType.quote, undefined, language.zh);
                O(VeName.SINGLE_QUOTE, "’", SymbolType.quote, undefined, language.zh);
                O(VeName.DOUBLE_QUOTE, "“", SymbolType.quote, undefined, language.zh);
                O(VeName.DOUBLE_QUOTE, "”", SymbolType.quote, undefined, language.zh);
                O(VeName.ESCAPTE, "#", SymbolType.escape, undefined, language.zh);
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LPAREN), this.get(VeName.RPAREN)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LBRACK), this.get(VeName.RBRACK)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LPAREN, language.zh), this.get(VeName.RPAREN, language.zh)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LBRACK, language.zh), this.get(VeName.RBRACK, language.zh)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LBRACE), this.get(VeName.RBRACE)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LT), this.get(VeName.GT)));
                this.blocks.appendArray(new Lang.VeArray(this.get(VeName.LT, language.zh), this.get(VeName.GT, language.zh)));
                T(VeBaseType.Null, VeBaseTypeKind.value);
                T(VeBaseType.Any, VeBaseTypeKind.value);
                T(VeBaseType.String, VeBaseTypeKind.value);
                T(VeBaseType.Number, VeBaseTypeKind.value);
                T(VeBaseType.Int, VeBaseTypeKind.value, undefined, VeBaseType.Number);
                T(VeBaseType.Bool, VeBaseTypeKind.value);
                T(VeBaseType.Array, VeBaseTypeKind.ref);
                T(VeBaseType.Object, VeBaseTypeKind.ref);
                T(VeBaseType.Regex, VeBaseTypeKind.ref);
                T(VeBaseType.Date, VeBaseTypeKind.ref);
                T(VeBaseType.Url, VeBaseTypeKind.ref);
                T(VeBaseType.Dir, VeBaseTypeKind.ref);
                T(VeBaseType.File, VeBaseTypeKind.ref);
                T(VeBaseType.Image, VeBaseTypeKind.ref);
                T(VeBaseType.Path, VeBaseTypeKind.ref);
                T(VeBaseType.Point, VeBaseTypeKind.ref);
                T(VeBaseType.Font, VeBaseTypeKind.ref);
                T(VeBaseType.Color, VeBaseTypeKind.ref);
            }
            getKeyWords() {
                return this.keywords;
            }
            getOperators() {
                return this.operators;
            }
            getBlocks() {
                return this.blocks;
            }
            getTypeMaps() {
                return this.typeMaps;
            }
            find(predict) {
                var r = this.keywords.find(predict);
                if (r)
                    return r;
                r = this.operators.find(predict);
                return r;
            }
            get(name, lang) {
                lang = lang || language.en;
                var k = this.keywords.find(x => x.name == name && x.lang == lang);
                if (k)
                    return k;
                return this.operators.find(x => x.name == name && x.lang == lang);
            }
            getAll(name) {
                var ks = this.keywords.findAll(x => x.name == name);
                if (ks.length > 0)
                    return ks;
                return this.operators.findAll(x => x.name == name);
            }
            static create() {
                return new _VeSyntax;
            }
        }
        Lang._VeSyntax = _VeSyntax;
        Lang.VeSyntax = _VeSyntax.create();
    })(Lang = Ve.Lang || (Ve.Lang = {}));
})(Ve || (Ve = {}));
//# sourceMappingURL=ve.syntax.js.map