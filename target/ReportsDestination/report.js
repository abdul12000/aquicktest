$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature_files/CheckVisa.feature");
formatter.feature({
  "name": "Confirm whether a visa is required to visit the UK",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestToRun"
    }
  ]
});
formatter.scenario({
  "name": "Japan nationality coming to study and staying longer than six months",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "name": "I provide a nationality of \"Japan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.quicktest.stepDef.VisaStepDef.\u003cinit\u003e(VisaStepDef.java:11)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Next Step\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select the reason as \"Study\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on \"Next Step\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I state I am intending to stay \"longer than 6 months\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on \"Next Step\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I will be informed that \"You’ll need a visa to study in the UK\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});