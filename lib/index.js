const CssSyntaxGenerator = require('./CssSyntaxGenerator');
const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');
const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
const CssDeclarationGenerator = require('./CssDeclarationGenerator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssAtRuleGenerator = require('./CssAtRuleGenerator');
const CssStyleRuleGenerator = require('./CssStyleRuleGenerator');
const CssStylesheetGenerator = require('./CssStylesheetGenerator');
const createGeneratorFacade = require('chance-generators/lib/createGeneratorFacade');

module.exports = {
  syntax: createGeneratorFacade(CssSyntaxGenerator),
  namedSyntax: createGeneratorFacade(CssNamedSyntaxGenerator),
  selector: createGeneratorFacade(CssSelectorGenerator),
  declarationValue: createGeneratorFacade(CssDeclarationValueGenerator),
  declaration: createGeneratorFacade(CssDeclarationGenerator),
  declarationList: createGeneratorFacade(CssDeclarationListGenerator),
  atRule: createGeneratorFacade(CssAtRuleGenerator),
  styleRule: createGeneratorFacade(CssStyleRuleGenerator),
  stylesheet: createGeneratorFacade(CssStylesheetGenerator),
};
