//Code for modifying selections in tab-content based on pokemon selected (work in progress won't be finished for awhile, but will be a big upgrade when finishe )
//$('#BAMDEXSEARCH1').click(function() {
//  var p1 = $("#bammon1 option:selected").val();
  //this is a big change may try forking it so I can add it in there and make that beta version. I just want the importable perfect by alpha release anyways



//The Teambuilding Exportable (long af sting at the end am I right?)
$('#teambtn').click(function() {

var Pokemon1 = $("#bammon1 option:selected").val();
var Pokemon2 = $("#bammon2 option:selected").val();
var Pokemon3 = $("#bammon2 option:selected").val();
var Pokemon4 = $("#bammon4 option:selected").val();
var Pokemon5 = $("#bammon5 option:selected").val();
var Pokemon6 = $("#bammon6 option:selected").val();
var Item1 = $("#Item1 option:selected").val();
var Item2 = $("#Item2 option:selected").val();
var Item3 = $("#Item3 option:selected").val();
var Item4 = $("#Item4 option:selected").val();
var Item5 = $("#Item5 option:selected").val();
var Item6 = $("#Item6 option:selected").val();
var Ability1 = $("#Ability1 option:selected").val();
var Ability2 = $("#Ability2 option:selected").val();
var Ability3 = $("#Ability3 option:selected").val();
var Ability4 = $("#Ability4 option:selected").val();
var Ability5 = $("#Ability5 option:selected").val();
var Ability6 = $("#Ability6 option:selected").val();
var Nature1 = $("#Nature1 option:selected").val();
var Nature2 = $("#Nature2 option:selected").val();
var Nature3 = $("#Nature3 option:selected").val();
var Nature4 = $("#Nature4 option:selected").val();
var Nature5 = $("#Nature5 option:selected").val();
var Nature6 = $("#Nature6 option:selected").val();
var Move1 = $("#Move1 option:selected").val();
var Move2 = $("#Move2 option:selected").val();
var Move3 = $("#Move3 option:selected").val();
var Move4 = $("#Move4 option:selected").val();
var Move5 = $("#Move5 option:selected").val();
var Move6 = $("#Move6 option:selected").val();
var Move7 = $("#Move7 option:selected").val();
var Move8 = $("#Move8 option:selected").val();
var Move9 = $("#Move9 option:selected").val();
var Move10 = $("#Move10 option:selected").val();
var Move11 = $("#Move11 option:selected").val();
var Move12 = $("#Move12 option:selected").val();
var Move13 = $("#Move13 option:selected").val();
var Move14 = $("#Move14 option:selected").val();
var Move15 = $("#Move15 option:selected").val();
var Move16 = $("#Move16 option:selected").val();
var Move17 = $("#Move17 option:selected").val();
var Move18 = $("#Move18 option:selected").val();
var Move19 = $("#Move19 option:selected").val();
var Move20 = $("#Move20 option:selected").val();
var Move21 = $("#Move21 option:selected").val();
var Move22 = $("#Move22 option:selected").val();
var Move23 = $("#Move23 option:selected").val();
var Move24 = $("#Move24 option:selected").val();
var hpevs1 = document.getElementById("hpevs1").value;
var hpevs2 = document.getElementById("hpevs2").value;
var hpevs3 = document.getElementById("hpevs3").value;
var hpevs4 = document.getElementById("hpevs4").value;
var hpevs5 = document.getElementById("hpevs5").value;
var hpevs6 = document.getElementById("hpevs6").value;
var atkevs1 = document.getElementById("atkevs1").value;
var atkevs2 = document.getElementById("atkevs2").value;
var atkevs3 = document.getElementById("atkevs3").value;
var atkevs4 = document.getElementById("atkevs4").value;
var atkevs5 = document.getElementById("atkevs5").value;
var atkevs6 = document.getElementById("atkevs6").value;
var defevs1 = document.getElementById("defevs1").value;
var defevs2 = document.getElementById("defevs2").value;
var defevs3 = document.getElementById("defevs3").value;
var defevs4 = document.getElementById("defevs4").value;
var defevs5 = document.getElementById("defevs5").value;
var defevs6 = document.getElementById("defevs6").value;
var spaevs1 = document.getElementById("spaevs1").value;
var spaevs2 = document.getElementById("spaevs2").value;
var spaevs3 = document.getElementById("spaevs3").value;
var spaevs4 = document.getElementById("spaevs4").value;
var spaevs5 = document.getElementById("spaevs5").value;
var spaevs6 = document.getElementById("spaevs6").value;
var spdevs1 = document.getElementById("spdevs1").value;
var spdevs2 = document.getElementById("spdevs2").value;
var spdevs3 = document.getElementById("spdevs3").value;
var spdevs4 = document.getElementById("spdevs4").value;
var spdevs5 = document.getElementById("spdevs5").value;
var spdevs6 = document.getElementById("spdevs6").value;
var speevs1 = document.getElementById("speevs1").value;
var speevs2 = document.getElementById("speevs2").value;
var speevs3 = document.getElementById("speevs3").value;
var speevs4 = document.getElementById("speevs4").value;
var speevs5 = document.getElementById("speevs5").value;
var speevs6 = document.getElementById("speevs6").value;
$('textarea#team').text(Pokemon1 + Item1 + "\n" +  Ability1 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature1 + "\n" +  Move1 + "\n" +  Move2 + "\n" +  Move3 + "\n" +  Move4 + "\n" + "\n" + Pokemon2 + Item2 + "\n" + Ability2 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature2 + " \n"  + Move5 + "\n"  + Move6 + "\n" +  Move7 + "\n" + Move8 + "\n" + "\n" + Pokemon3 + Item3 + "\n" +    Ability3 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature3 + "\n" + Move9 + "\n" + Move10 + "\n" + Move11 + "\n"  + Move12 + "\n" + "\n" + Pokemon4 + Item4 + "\n" +  Ability4 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature4 + "\n" +  Move13 + "\n"  + Move14 + "\n" + Move15 + "\n"  + Move16 + "\n" + "\n" + Pokemon5 +  Item5 + "\n" + + Ability5 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature5 + "\n"  + Move17 + "\n"  + Move18 + "\n"  + Move19 + "\n"  + Move20 + "\n" + "\n" + Pokemon6 + Item6 + "\n" + Ability6 + "\n" + "EVs: " + hpevs1 + " HP / " + atkevs1 + " Atk / " + defevs1 + " Def / " + spaevs1  + " SpA / " + spdevs2 + " SpD / " + speevs1 + " Spe" + "\n" + Nature6 + "\n" + Move21 + "\n" + Move22 + "\n"  + Move23 + "\n" + Move24 + "\n" + "\n" );
});

