<head>
  <style>

#rules{
display: none;
}

  </style>
</head>


<button onclick="getChar()">SCI FI DIE TRY</button>
<div id="name"></div>
<div id="race"></div>
<div id="class"></div>
<div id="desc"></div>
<div id="physique"></div>
<div id="dexterity"></div>
<div id="will"></div>
<div id="ED"></div>
<div id="HP"></div>
<p id="backstory"></p>
<p id="traits"></p>
<p id="inventory"></p>

<button onclick="fshowrules()">Show/Hide Rules</button>
<br>
<div id="rules">
<b>HP are your hit points. Treat them more like "don't get hit points"; these represent your ability to avoid taking actual damage. When you take damage, subtract it from your HP. If you have no HP left, the damage spills over to one of your stats. <br>
You regain your HP after a few minutes of rest. You heal 1d6 damage from each of your stats after a long rest (night of sleep).<br>
ED stands for Energy Dice. You can use as many ED as you want when you use a power. For each one, roll a d6. Powers' effects scale off of the total you roll.</b><br>
<b>Energy Dice do not replenish on their own. You have to find them out in the world. Some example ways to gain Energy Dice:</b><br>
-Absorbing it from a thaumic battery.<br>
-Getting struck by lightning or being heavily irradiated.<br>
-Getting crit by an enemy power.<br>
-Eating the brain of an energy-dense creature/wizard.<br>
<br>
<b>Character progression is made by marking an X next to an element of your character sheet.</b> <br>
You can mark an X:<br>
-at the end of a session (anywhere)<br>
-being considered the MVP at the end of a session (anywhere)<br>
-for having the most dramatic moment at the end of a session (anywhere)<br>
-almost dying (next to the relevant stat)<br>
-for recieving max damage from an attack (next to HP)<br>
-for crit failing and suggestiong a worse outcome than the one the DM gives you (anywhere)<br>
-for failing a roll by 1 (next to the relevant section)<br>
-for killing a notable creature with a weapon (next to the weapon)<br>
-using an item in a clever way (next to the item)<br>
-using a character flaw to your advantage (next to the flaw)<br>
-doing something historically noteworthy, or that might be the subject of legend (next to your name)<br>
<b>When you have 3 Xs next to (something), you can spend them to:</b><br>
-(stat) Roll 3d6, if the result is higher than your stat, increase it by 1.<br>
-(HP) Roll 3d6, if the result is higher than your HP, increase it by 1.<br>
-(weapon) Upgrade the weapon with available materials, or add a word to the weapon's name (when the name is complete, the weapon gets magic powers and/or sentience).<br>
-(item) Either upgrade the item with available materials, or disassemble the item and memorize the schematic of how to craft it.<br>
-(a power, trait, or drawback) Can change it a little bit, or add an additional benefit (in this way, drawbacks could eventually adapt into beneficial powers).<br>
-(your name) Add a word to your name (increases fame/renown).<br>
<br>
<b>Ways to gain new powers:</b><br>
-Making a deal with a powerful entity.<br>
-Making a revolutionary discovery.<br>
-Stumbling on an ancient/forbidden secret.<br>
-Being taught by a wise/powerful mentor.<br>
  
</div>

<script>
var name = '';
var simpleDesc = '';
var description = [];
var vrace = '';
var raceID = 0;
var PHY = 0;
var DEX = 0;
var WILL = 0;
var HP = 4;
var ED = 2;
var backstory = ['<b>Before you were an adventurer you...</b>'];
var traits=[];
var gear=[];
var invWeight=0;
var randItems=0;
var bonusname = [];
var bonusrace = '';
var bonusdesc = '';


var epithets = ["the Bloodied", "the Crusher", "War Tooth","the Generous","Underfoot","Hart-Footed","Witch-Breaker","the Sunderer","the Wise","the Grim","the Wide-Eyed","Star-Crossed","the Fair","the Crow","the Amorous","the Frantic","the Old","the Stout","Blood-Drinker","the Swarthy","Battle-wise","the Learned","Deep-Delver","the Champion","the Giant","Far-traveling","Knower-of-Things","the Small","Silvertongue","Stormcrow","the Scarred","the Leech","Star-eyed","the Wild","Bee Friend","the Burned","the Subtle","the Clever","the Young","Teller-of-Tales","Grave Robber","the Whispered","the Gray","the Judge","Bee Stung","the Dreamer","Thick-skulled","the Hound","Strikes-from-Above","Iron-side","Moon Jumper","the Quiet","the Gentle","the Unborn","Who-Sees-All","the Red","Bald Pate","the Exile","Sword-splitter","the Bright","Far-seer","the Proud","the Fortunate","the Honest","the Fair","the Unbowed","the Leaper","the Pious","the Lecherous","the Stingy"];

var mutation = ['Has a third arm.','Have an eye in the back of your head. You can remove it and stick it back in at will.','Can echolocate.','Has claws that can dig rapidly; no fine motor skills.','Has gills.','Has infravision, cannot see color.','Your blood plasma can heal others: spend hp to heal someone else an equal amount.','Has extremely sensitive hearing.','Sticky hands: you can climb like a spider, but take a whole round to drop/let go of something.'];

var trauma = ['a crippling fear','a haunting loss','a lingering regret','a consuming phobia','crippling insomnia','existential torment','a terrible debt','constant nightmares'];

var weapons = ['club (1d4)','shiv (1d4)','bow (1d6)','spear (1d6)','telescopic baton','baseball bat (1d6)','crowbar (1d6)','falchion (1d6)','brick on a stick (1d6)','knife on a stick (1d6)','axe (1d6)','whip (1d4)','hammer (1d6)','wrench (1d6)','flail (1d6)','halberd (2h, 1d10)','sledgehammer (2h, 1d10)','longbow (1d6)','greatsword (2h, 1d10)','greataxe (2h, 1d10)','rapier (1d6)','crossbow (1d12)','sling (d4)','pitchfork (1d6)','staff (1d6)','knuckledusters (1d4)','shovel (1d6)','cleaver (1d6)','hockey stick (1d4)'];

var armor = ['a gas mask','a welding mask,','some heavy spiked boots','worn kevlar vest','motorcycle helmet','football helmet','duct-tape and cardboard LARP chestpiece','shinguards','trash can lid shield','riot shield'];

var potions = ['Herbicide','Sulfuric Acid','Hovering','ANGEL BLOOD','DO NOT, UNDER ANY CIRCUMSTANCE, DRINK','Methamphetamines','Cyanide','*incoherent scribbling*','*the label has worn off*','Rapid Aging','Restore Genes','Lobotomy-in-a-Bottle "fun for the whole family!"','Clairvoyance','Telekinesis','Telepathy','Levitation','DRINK THIS, IT WILL GO GREAT, TRUST','Heal Burns','Mutation-in-a-Bottle "impress your friends!" (lasts 5 mins)','Nitro-Glycerin','Reverse Gravity','Rabies-in-a-Bottle "great at parties!"','Echolocation','Chloroform','Truth Serum','Lie Serum','Anaesthetic','Extreme Lubricant','Antitoxin','Miracle-Gro (plants)','Miracle-Gro','ULTRA-STEROID, OH YEEEUH','Focusing','LIQUID ENERGY','Caffeine, pure','Superglue','PLAY DEAD','Fungicide','YOU WILL SEE... EVERYTHING'];

var blessings = ['Lucky: Once per game, you may reroll one roll.','You have inherited the wealth of a long-lost ancestor. It is waiting for you... somewhere.'];

var curses = ['You feel the gaze of malevolent entities upon you. They are amused by your suffering. (Once per session, the DM can ask you to reroll a roll.)','You have been chosen to feed the gods sacrifices. (Sacrifice one suitable living creature a week or face terrible consequences.)'];

var psionics = [];

function d(a, b){
	i = 0;
	total = 0;
	while (i<a) {
		total += Math.floor(Math.random() * b)+1;
		i++;
	}
	return total;
}

function r(c) {return Math.floor(Math.random() * c);}

function fshowrules(){

var x = document.getElementById("rules");
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
    }

}

function s(array) {
    return array[r(array.length)];
}

function clearAll(){
  name = '';
  simpleDesc = '';
  bonusname = [];
  bonusrace = '';
  bonusdesc = '';
  description = [];
  vrace = '';
  raceID = 0;
  backstory = '';
  ED=2;
  HP=4;
  backstory = ['<b>Before you were an adventurer you...</b>'];
  traits = ["<b>TRAITS:</b>"];
  gear = ["<b>INVENTORY</b>"];
  invWeight = -1; //because of the name
  randItems = 3;

  document.getElementById("desc").innerHTML = '';
  document.getElementById("inventory").innerHTML = '';
  document.getElementById("traits").innerHTML = '';
  document.getElementById("backstory").innerHTML = '';
}





































function getRace(zorPR){

  var raceList = [
    'True Human',
    'Silic',
    'Oozeling',
    'Mushroom',
    'Kobold',
    'Human',
    'Human',
    'Human',
    'Floran',
    'Mantis',
    'Scablander',
    'Trilobite',
    'Olm',
  ];

  raceID = raceList[zorPR];

  switch(raceID){
    case 'Human':
        vrace = 'Human';
        simpleDesc += 'A person';
        description.push(['who is eager to explore the wide multiverse.',' that hopes for a brighter future.'][r(2)]);
        traits.push('Switch any two stats.');
        randItems += 1;
        break;

    case 'Kobold':
        vrace = 'Kobold';
        bonusname.push([' the Mischievous',' the Covetous',' the Ingenious',' the Squamous'][r(4)]);
        simpleDesc += 'A tiny mischievous lizard';
        description.push([' who is eager to learn something new.',' with an insatiable appetite for discovery.',' who has a lot to learn, and a lot of heart.',' who searches for answers.'][r(4)]);
        traits.push('Inventive: only needs 2 Xs to upgrade or reverse-engineer an item.','Tiny: cannot use large weapons or armor.');
        gear.push('Some broken down scrap');
        break;  

    case 'Scablander':
        vrace = 'Scablander';
        bonusname.push([' the Enduring',' the Survivor',' the Austere',' Solemn-Brow',' the Scarred'][r(4)]);
        description.push([' who seeks glory and death.',' who has had a hard time of it already.',' who is searching for a place to call home.',' who yearns to test their skills in battle.'][r(4)]);
        HP += 1;
        simpleDesc += 'An incredibly tough-skinned ascetic';
        traits.push('Scab Armor: every time you get wounded, gain 1 damage resistance, resets at the end of an encounter.','Cannot wear armor, disadvantage to sneaking, swimming, and running.');
        gear.push('a coating of thick, scabrous skin plates');  
        break; 

    case 'Mantis':
        vrace = 'Mantis';
        bonusname.push([' the Vicious',' the Prideful',' Throat-Slicer',' Bloody-Claw',', Slayer of Rivals'][r(5)]);
        description.push([' who yearns to test their skills in battle.',' who kills without remorse.',' who seeks glory and death.',' who yearns to be the undisputed victor.'][r(4)]);
        simpleDesc += 'A proud warrior insect';
        traits.push('Has massive claws.','Can jump up to 30ft as an action.','Cannot do fine motor work or use non-mantis weapons/armor.') ;
        gear.push('Mantis Claws (2d4)'); 
        break;

    case 'Android':
        vrace = 'Android';
        simpleDesc += 'A cold and eerie semblance of humanity';
        traits.push('Immune to biological conditions, hunger, thirst, sleep.','Cannot heal naturally, must be repaired.','Can interface with technology.');
        break;

    case 'Oozeling':
        vrace = 'Oozeling';
        bonusname.push([' the Gelatinous',' the Formless',' the Bubbling',' the Frothing',' the Liquiform'][r(5)]);
        description.push([' who has a lot to learn, and a lot of heart.',' who has had a rough time of it already.',' that views it all as one big joke.',' who searches for answers.'][r(4)]);
        simpleDesc += 'A giant amoeba';
        traits.push('Can fit through tiny cracks and tight spaces, given time.','Store items inside of yourself.','All the drawbacks of being a spineless, squishy creature.');
        break;

    case 'Mushroom':
        vrace = 'Mushroom';
        bonusname.push(' the Fungal');
        simpleDesc += 'A vaguely humanoid fungus';
        description.push([' who has big hpes and dreams.',' who wandered far from home, seeking adventure.',' who is searching for answers.'][r(3)]);
        ED+=1;
        traits.push('Once per day, can absorb an ED from a nearby power, decreasing its effectiveness by an equivalent amount.');
        break;

    case 'Silic':
        vrace = 'Silic';
        bonusname.push([' Many-Facets',' the Glittering',' the Steady',' the Luminous'][r(4)]);
        description.push([' who seeks ever greater power.','who is chasing the next big discovery.'][r(2)]);
        simpleDesc += 'A figure of glittering crystal';
        traits.push('Energy core: You are a living battery. You gain energy dice from additional sources and you can spend an energy dice to heal 1d6 from a stat.','Silicon-based: you cannot heal naturally.'); 
        break;

    case 'Trilobite':
        vrace = 'Trilobite';
        simpleDesc += 'An ancient, hulking bipedal beetle';
        description.push([' who is on the run from the past.',' who is traumatized from witnessing ancient horrors.',' who bears witness to ancient horrors.'][r(2)]);
        traits.push('Armored shell: you have 1 DR, have disadvantage to sneaking, swimming, climbing.','If you lie perfectly still, you can slow your metabolism down to the point where you no longer age, and do not need to eat, drink, or breathe: all physical body processes cease functioning.');
        gear.push('the unspeakable trauma of witnessing the birth and death of the primeval world');
        break;

    case 'Olm':
        vrace = 'Olm';
        simpleDesc += 'A carnivorous blind cave salamander from deep underground';
        description.push([' who craves delicious surface-dweller blood.',' who has left their resource-barren underworld homeland.'][r(2)]);
        traits.push('You cannot see, but all your other senses are heightened.','You can breathe underwater, can swim flawlessly, and take half damage while underwater.');
        break;

    case 'True Human':
        vrace = 'True Human';
        simpleDesc += 'A distant remnant of a civilization long buried by time';
        description.push([' who wishes to rebuild the glittering empires of the long-ago.',' who wishes to revive their long-lost culture.'][r(2)]);
        traits.push('Uncorrupted technology was created to serve you. It can detect your genes and will obey your commands.','Immune to mutations.','Some terrible force deep in the cosmos yearns for your demise.');
        break;   
        
    case 'Floran':
        vrace = 'Floran';
        bonusname.push([' the Verdant',' Deep-Rooted',' Earth-Bound',' Green-Seer',' Many-Leaved'][r(5)]);
        simpleDesc += 'A sentient humanoid-shaped plant';
        description.push([' who flees the blight that consumed their homeland.',' who seeks to praise the glorious sun.'][r(2)]);
        traits.push('Can photosynthesize in sunlight.',['Can camouflage self in dense vegetation.','Can speak to plants.','Can use an action to take root, becoming immune to forced movement or being knocked down.'][r(3)]);
        break;

    case 'Brain in a Jar':
        vrace = 'Brain in a Jar';
        simpleDesc += 'A disembodied brain in a jar';
        description.push([]);
        traits.push('Your jar is extremely fragile.','You have no legs, you will need someone to carry you around.','You have extreme psionic abilities.')
        ED += 3;
        break;

    default:
        vrace = 'No race details found.';
        break;

}

}























function getChar(){

clearAll();

var title = [
"Aspirant",
"Reaver",
"Amnesiac",
"Mendicant",
"Philosopher",
"Fortune Seeker",
"Outlaw",
"Murderhobo",
"Mercenary",
"Pioneer",
"Wayfarer",
"Entrepreneur",
"Wanderer",
"Roustabout",
"Innovator",
"Vagabond",
"Prospector",
"Dungeoneer",
"Innovator",
"Spelunker",
"Explorer",
];

var description2 = [
" that has a lot to learn, and a lot of heart",
" that kills people",
" that has lost their memory",
" that has had a rough time already",
" that searches for the meaning of life",
" that has big hopes and dreams",
" that is going to get rich or die trying",
" that is driven by crazed ambition",
" that seeks glory and death",
" that hopes for a brighter future",
" that is marked by strange events",
" that would rather have others do the dirty work",
" that is on the run from the past",
" that views it all as one big joke",
" who is chasing the next big discovery",
" that is going to risk it all",
" that enjoys the finer things in life",
" that hopes to retire some day",
" who is out to make a name for themselves",
" that is desperate to prove themselves",
" that found the meaning of life in a dream",


];

PHY = d(3,6);
DEX = d(3,6);
WILL = d(3,6);

if (PHY < 7) ED+=1;
if (DEX < 7) randItems+=1;
if (WILL < 7) HP+=1;
if (PHY > 14) ED-=1;
if (DEX > 14) HP-=1;
if (WILL > 14) HP-=1;
if (PHY < 9) ED+=1;
if (DEX < 9) randItems+=1;
if (WILL < 9) HP+=1;
if (PHY > 12) ED-=1;
if (DEX > 12) HP-=1;
if (WILL > 12) HP-=1;
if (PHY>13&&DEX>13&&WILL>13) {
  bonusname = [' the Cursed',' Ill-Fortuned',' the Doomed'][r(3)];
  backstory.push('You have been cursed by enigmatic beings from beyond the veil.')
  traits.push(s(curses));
}

if (PHY<8&&DEX<8&&WILL<8) {
  bonusname = [' the Blessed',' the Auspicious',' the Destined'][r(3)];
  backstory.push('You have been blessed by enigmatic beings from beyond the veil.')
  traits.push(s(blessings));
}

var z = r(30);
    switch(z){
    case 25: case 26: case 27:
         bonusrace = 'Mutated ';
         bonusdesc = ' They have been horribly mutated.';
         traits.push(s(mutation));
    break;
    case 28:
         PHY-=2;
         DEX-=2;
         WILL-=2;
         HP-=2;
         bonusrace = 'Undead ';
         bonusdesc = [' They have returned from death.',' They have peered beyond the veil.',' They persist beyond death.',' Some unknown force animates them beyond death.'][r(4)];
         bonusname.push([' the Returned',' the Deathless',' the Endless',' the Abhorrent',' the Vile'][r(5)]);
         traits.push('Can return from death by taking a permanent -1 to all stats.');
         gear.push(['the obscene, vile, mysterious energy that animates you beyond death','the deep, existential horror of having glimpsed the void','crippling survivor guilt at being the one who returned from death'][r(3)]);
    break;
    case 29:
         PHY-=2;
         DEX-=2;
         WILL-=2;
         HP-=2;
         bonusrace = 'Infested ';
         bonusdesc = [' They have been taken over by a sentient fungus.',' A sentient fungus has invaded their body and consumed their mind.',' They have become an omen of the takeover of the underground fungal overlords.'][r(3)];
         bonusname.push([' Cordyceps',' the Infested',' the Spore-Ridden'][r(3)]);
         traits.push('If you die, you can infest a nearby dead body by taking a permanent -1 to all stats.');
         gear.push('the fungal infestation that puppetteers your meat corpse');
    break;
    default:
         bonusrace = '';
         bonusdesc = '';
}     


if(r(4) < 3) { 
    getRace(r(4)+r(5)+r(4));
    }
else {
    getRace(r(13));
    }























































  var x = [];
  while(x.length<4) {
  	var n = r(14)+r(15);
    if(x.includes(n)) i--;
    else x.push(n);
  }

  for (var i = 0; i < 3; i++) {

    var p = 0;

    switch(x[i]){
        case 0:
        p = r(3);
        description.push([' who is marked by strange events.',' who is haunted by strange visions.'][r(2)]);
        backstory.push('Peered through the veil of reality and came to a terrifying conclusion: '+['that everything you know is a deception brought on by unseen puppet masters.','that every event and action has already been predetermined; you are but a helpless insect caught in the amber of fate.','that all things are subject to the sheer chaos of probability, and nothing is beyond doubt; the future that you have taken for granted could be shattered by the slightest misstep.'][p]);
        traits.push(['Once per lifetime, your sheer disbelief can grant you total immunity to a threat, attack, power, or concept.','Once per lifetime, you may predict something, and it will happen exactly as you say.','Once per lifetime, you may cast doubt upon something that is universally known to be true: for this specific instance, it is false.'][p]);
        gear.push(['crippling paranoia of unseen puppet masters','existential dread of having no agency in this world','crippling fear that the slightest decision could lead the world to a spiral of disaster'][p]);
        bonusname.push([' the Witness',' the Perceiver',' Fate-Deceived'][r(3)]);
        break;

        case 1:
        description.push([' who is on the run.',' who is going to risk it all.',' who safeguards their most prized possession.'][r(3)]);
        backstory.push('"Acquired" a powerful artefact, not without consequence.');
        gear.push(['Dimensional Storage Box (+10 inventory slots, complicated to access,', 'Small Ray Gun (1d20 force damage, explodes on a crit fail,', 'Rocket Boots (DEX check to take-off, maneuver or land, damaged on a crit fail,', 'Telepathic Helm (Electrodes extend into brain: 1 damage to take on or off. WIS check to project thoughts with force or subtlety,', 'Metabolic Strength Gauntlets (Electrodes extend into veins: 1 damage to take on or off. +2 STR mod, doubles food requirements, cannot be used while hungry,','Cup-Sized Portal to a Place of Endless Water (moderately brackish, possibly not endless)','Energy Amplifier (Energy dice spent in the vicinity are d8s instead of d6s)'][r(6)]+[' continually pursued by previous owners)',' a tempting target for thieves)',' marked by irritating prophecy)',' subtly cursed)'][r(4)]);
        bonusname.push([' Relic-Seeker',' Tomb-Robber'][r(2)]);
        break;

        case 2:
        p = r(5);
        ED += 1;
        description.push([' who found the meaning of life in a cult.',' who seeks to spread mystical teachings.',' who seeks greater mystical power.'][r(3)]);
        backstory.push('Joined the cult of the '+['Dreamwalkers','Scar-Speakers','Flesh Apostles','Tech Wardens','Machine Gods'][p]+'. [a power and a piece of gear]');
        traits.push(['Power - Hypnosis: 1ED, puts a target that can see you to sleep.','Power - Transmit scar: Politely try to convince a wound to move from an ally to an enemy: spend 1ED, roll a 1d6, an ally heals that amount and an enemy takes that amount.','Power - Flesh Sculpting: 1ED/round, your hands can heal or inflict 1d6 damage per round.','Power - EMP burst: 1ED, nearby tech saves or gets shut down, sentient tech gets disrupted.','Power - Dominate Tech: Once per day, can release a virus that will infect technology and bring it under your control, 1ED/round.'][p]);
        gear.push(['Dreamknife. Deals 2d6 damage to sleeping targets, can only affect sleeping targets.','Ritual scarring dagger: deal 1d6 damage to a stat, gain 1ED.','A stem cell blob, one use, that grants a beneficial mutation OR cures all stat damage OR cures a disease/poison.','A thrice-sealed data cube containing a corrupted AI.','A data cube containing the location of the corpse of a dead machine god.'][p]);
        bonusname.push([[' Dreamweaver',' Sleepwalker',' the Waking Dreamer'][r(3)],[' the Scarred',' Many-Scar'][r(2)],[' Meat-and-Gristle',' Flesh-Carver'][r(2)],[' Relic Warder',', Guardian of the Vault'][r(2)],[' of the Silicon Eye',', Cog in the Great Machine'][r(2)]][p]);
        break;

        case 3:
        ED += 1;
        description.push([' who seeks a cure for their affliction.',' who seeks to hide their affliction.',' who is very secretive.'][r(3)]);
        backstory.push('Became afflicted with unstable genes. [shapeshifting]');
        traits.push('Shapeshifter: 1ED, transform into a human-sized '+['Pterodactyl', 'Centipede', 'Cat', 'Goat', 'Horse', 'Monkey', 'Crab', 'Snake',' Velociraptor'][r(9)]);
        bonusname.push([' the Shifting',' Gene-Shifter',' the Changeling'][r(3)]);
        break;

        case 4:
        p = r(4);
        ED += 1;
        description.push([[' who gained their abilities at a terrible cost.',' who honed their skill through endless practice.',' who seeks to contact their otherworldly masters.',' who searches for their missing mentor.'][e],' who seeks ever greater psionic power.'][r(2)]);
        backstory.push('Unlocked your hidden Psionic potential '+['through a traumatic event','by copious trial and error','through contact from mysterious beings in the dreamlands','by being taught'][p]+". [1ED, ability, consequence]");
        traits.push(['Power - Dream Projection: 1ED, project your astral self.','Power - Telekinesis: 1ED, manipulate objects from a distance.','Power - Telepathy: 1ED, listen to and project thoughts.','Power - Illusion: 1ED, create a human-sized illusion.'][r(4)]);
        gear.push([s(trauma),'extreme crippling boredom','a cryptic dream message','ridiculous demand from your mentor'][p]);
        bonusname.push([' the Awakened',' of the Third Eye',' the Cerebral'][r(3)]);
        break;

        case 5:
        p = r(4);
        description.push([' who is chasing the next big discovery.',' who is out to make a name for themselves.',' who hopes to retire someday.'][r(3)]);
        backstory.push('Developed an uncanny knack for '+['measurement','being in the right place at the right time','remembering things','never getting lost'][p]+'. [ability]');
        traits.push(['Can measure the exact height and width of objects by looking at them.','Lucky: can reroll a d20 roll once per session.','Has perfect memory.','Always knows where the cardinal directions are.'][p]);
        HP += 1;
        bonusname.push([[' the Precise',' the Exact'][r(2)],[' the Fortunate',' the Auspicious'][r(2)],', Who Remembers',' Who Knows the Way'][r(4)]);
        break;

        case 6:
        ED += 1;
        description.push([' who is searching for answers.',' who views it all as one big joke.',' who searches for the mysterious source of their powers.'][r(3)]);
        backstory.push('Had a strange energy sequence encrypted into your genes. [1ED, Power]');
        traits.push(["Power - Decryption: (WILL+result) contest, if you win, counter or dispel an enemy's Power.",'Power - Brain swap: Switch bodies with target, duration = result. Large/powerful targets get a save.','Power - Command: Target must obey one word command. Save if harmful to self. Duration = result.','Power - Gaseous form: Unwilling targets get save; duration = result.','Power - Gelatinous form: Unwilling targets get save; duration = result.','Power - Ignite: Lights target on fire. Flame-resistant targets get save; duration = result.','Power - Levitate: Duration = result, lasts half as long on heavy targets; unwilling target gets save.'][r(6)]);
        bonusname.push([' of the Sequence',' the Encrypted'][r(2)]);
        break;

        case 7:
        p = r(15);
        description.push([' who seeks to hone their fighting techniques.',' who seeks to test their abilities against ever greater foes.',' who seeks to learn new combat techniques.'][r(3)]);
        backstory.push('Learned a new fighting style from '+['psion hunters.','stage performers.','guardians.','dervishes.','famed warriors.','frustrated fighters.','patient killers.','hunters.','berserkers.','thieves.','beast slayers.','your rival.','barbarians.','a police force.'][p]);
        traits.push("Fighting style: +1 Damage "+['for every Power you have seen a target use.','for every insult that has been directed at you.','for every ally the target has damaged.','for every two enemies you are adjacent to.','against a target that knows your name, +2 Damage if they also know your history.','every time you miss an attack.','for every round you left your sword in your scabbard.','if your target is being flanked, +2 Damage if they are surrounded.',"each time you've taken damage.","if you hit the target with one of their possessions, +2 Damage if they didn't know you had it.",'if your target is bigger than you.','every time your rival, another character, lands a killing blow.',"if you've bitten someone this fight.",'for every crime you know the target has committed.'][p]);
        bonusname.push([[' Brainscourge',' the Inquisitor'][r(2)],[' the Troubadour',' the Artful'][r(2)],[', Stalwart Protector',' the Bulwark'][r(2)],[' the Whirling',' the Graceful',' the Dancer'][r(3)],[' the Famed',', Widely Renowned'][r(2)],[' the Angry',' the Easily Frustrated'][r(2)],[' the Patient',' Who Waits and Brings the End'][r(2)],', Tracker of Beasts',[' the Enraged',' the Bloodthirsty'][r(2)],[' the Crafty',' the Sly'][r(2)],' Slayer of Beasts','',' the Barbarian',', Officer of the Law'][p]);
        break;

        case 8:
        p = r(3);
        description.push([' who has endured many terrible trials.',' who has had a rough time of it already.'][r(2)]);
        backstory.push('Learned how to survive in '+['the mad city of Qorenclave.','the great scab desert.','the forest of feral joy.'][p]+' [an ability, a consequence]');
        traits.push(['Can fake insanity very convincingly.','Hunger and thirst at half the normal rate.','Has advantage on saves vs. mind-altering effects.'][p]);
        gear.push(['a favor, owed by a complete lunatic','horrifying sunburns',s(trauma)][p]);
        bonusname.push([' of the Mad City',' of the Scablands',' of the Feral Forest'][p]);
        break;

        case 9:
        p = r(10);
        description.push([' who spreads the worship of their newfound religion.',' who is having a crisis of faith.',' who is on a divine pilgrimage.'][r(3)]);
        backstory.push('Found religion: you'+[' learned the ways of psionic purity at a mountaintop monastery',' began to worship the great War Machine',' learned from an eccentric hermit how to ascend beyond hunger and thirst','learned the ways of flesh-knitting from the priests of the Cathedral of All Flesh',' worship the all-knowing search engine oracle',' worship a mysterious Spirit of nonviolence',' worship a sinister pain-monger Spirit',' fell into the twisted ways of the Gilded Inquisition',' worship a wise and manipulative psychological Spirit',' worship a Spirit dedicated to cleansing the land'][p]+". [sacred power, condition, and sacred object]");
        traits.push('Ritual: '+['Power - Mental Purity (WILL + result contest) Remove a psionic or psychological effect.','Power - Energy Smite (add result to a damage roll). Lose 1ED if you ever back down from a fight.','Fasting (do not need to consume food or water for one day). Lose 1ED if you ever indulge in luxury.','Heal (1d6 hp). Lose 1ED if you accept any other belief or superstition.','Query (ask question, yes or no answer). Lose 1ED if you tell a blatant lie.','Sanctuary (within a small area, nobody can cause direct harm). Lose 1ED if you intentionally cause harm to another.','Pain Link (target takes the same damage as you). Lose 1ED when you are healed from a non-natural source.','Glare from On High (for one hour, you know the exact location of the target). Lose 1ED if you let a heretic escape.','Detect Lies (1ED, lasts one hour). Lose 1ED if you tell a blatant lie.','Cleanse (take 1d6 damage, remove an effect, disease, or poison). Lose 1ED if you demonstrate excessive pride.'][p]);
        gear.push(['Silicon Diadem (+1 save vs. Psionics, breaks if you crit fail)','Blood-Blessed Chainsaw (2d6, noisy, slow, cannot shut off until it tastes blood)','Unassuming Staff (1d6, can transform into any mundane melee weapon)','Holy Stem-Cell Tumor (consume to heal fully, or gain a mutation)','Combat Query HUD (WILL test to gain information about enemy combat stats)','Force-Shield Emitter (1ED: creates 10foot by 10foot pane of force)','Thaumic Battery (pain) (refills when you gain a trauma due to physical injury)','Shard of True-Crystal (1d3, +1 damage for each lie the target has told you)','Implant: Cordial Countenance (people like you, +1 to reaction rolls)','Blessed Hyperdimensional Disposal Unit (small box, anything placed inside will disappear.)'][p]);
        bonusname.push([[' the Purified',' the Transcendant',' of the Monastery'][r(3)],[', Bringer of Carnage',', Cog in the War Machine',' of Blood and Oil'][r(3)],[' the Transcendant',' Traveler of the Seven Gates'][r(2)],[' the Hierophant',' the Pious'][r(2)],[' who Sees all at the Press of a Button',' the Wildcard',', Dataseer'][r(3)],[' the Peaceful',' the Tranquil',', Queller of Conflicts'][r(3)],[' Pain-Monger',' the Agonizer',' the Masochistic'][r(3)],[', Who Asks Sharp Questions',', Inquisitor',' the Gilded'][r(3)],[' the Guru',' the Wise',', Knower of Many Things'][r(2)],', Guardian of the Wild Places'][p]);
        break;

        case 10:
        p = r(4);
        description.push([' who has learned a painful lesson.',' who has had a tough time of it already.',' who has survived terrible misfortune.'][r(3)]);
        backstory.push('Survived a '+['genocide','monster attack','psionic assault','deadly fall','duel against your greatest foe'][p]+'. [a trait, an item]');
        traits.push(['You are the last surviving member of your village.','Scarring: add '+r(4)+' to your hp.','+2 save vs. psionics.','Fall damage is halved.','A 1-in-6 save vs. death until you have your sweet, sweet vengeance.'][p]);
        gear.push(['priceless last heirloom of your people.','scars: 2 free Xs when you slay the monster that gave them to you.',s(trauma),'climbing gear','an oath of vengeance: 3 free Xs when it is fulfilled.'][p]);
        bonusname.push([[', Last of Their Kind',' the Final'][r(2)],[', Survivalist',' the Scarred'][r(2)],[' of the Shielded Mind',' the Mentalist'][r(2)],[' Lightfoot',' Nine-Lives',' "Twinkletoes"'][r(3)],[' the Rival','the Challenger'][r(2)]][p]);
        break;

        case 11:
        p = r(4);
        description.push([' who seeks to hone their craft.',' who is out to make a name for themselves.'][r(2)]);
        backstory.push("Studied under a master "+['Artisan','Tinker','Builder','Crafter','Mechanist'][r(5)]+". [2 Xs on an item, item schematic]");
        traits.push('Put two Xs on any one item in your inventory.','Gain a schematic for one of the non-high-tech items in your inventory.');
        randItems += 1;
        bonusname.push([' the Crafty',' the Resourceful',' the Artisan',' the Builder'][r(4)])
        break;

        case 12:
        p = r(4);
        HP += 1;
        description.push([' who searches for foes to vanquish.',' whose craft is violence.',' who moves with grace.',' who is driven by crazed ambition.'][p]);
        backstory.push('Learned how to fight '+["honourably","brutishly","with poise","like a bastard"][p]+'. [+1 HP, ability, weapon]');
        traits.push(['Can redirect an attack from a nearby ally to yourself, has 4-in-6 chance of working.','Rage: +1 damage, 1 DR, must make WILL check to do anything but murder those before you.','+1 damage when you have a hand free.','+1 damage when you try a gambit.'][p]);
        gear.push(['shield (1 DR from frontal attacks)','sledgehammer (2H, 1d10, slow)','rapier (1d6)','machete (1d6)'][p]);
        bonusname.push([[' the Honorable',' the Noble'][r(2)],[' the Brutish',' the Savage',' the Fierce'][r(3)],[' the Poised',' the Graceful',', Who Fights With Artistry',' the Deft'][r(4)],[' the Bastard',' the Cruel',' the Spiteful'][r(3)]][p]);
        break;

        case 13:
        p = r(19);
        description.push([' who enjoys the finer things in life.',' that hopes to retire some day.'][r(2)]);
        backstory.push('Were once '+['a virologist','a trader','a cook','a tinker','a butcher','a doctor','a hunter','a locksmith','a miner','a storyteller','a tailor','a parent','a scholar','a scientist','a gunsmith','a scribe','an apothecary','an engineer','a weaponsmith','an armorsmith'][p]+'. [an ability, two items]');
        traits.push(['Skilled at identifying and diagnosing illnesses.','Skilled at appraising the value of things.','Can make anything taste delicious, with enough ingredients.','Can disassemble things into their component parts.','Can carve rare monster parts from corpses.','Can diagnose injuries and illnesses.','Can identify tracks.','Advantage towards picking locks.','Can detect slopes and drafts in underground passageways.','Can enrapture audiences with tales.','Is always up to date with the latest fashions.','Has near-infinite patience.','Knows almost everything about a subject that is almost too obscure to be useful.','Knowledge on an extremely obscure subject.','Can repair guns, with access to the right parts.','Gains double xp for writing session reports.','Has a chance to know what potion ingredients do without having to test them.','Can attempt to repair mechanical objects.','Only needs 2 Xs to upgrade a weapon.','Only needs 2 Xs to upgrade armor.'][p]);
        gear.push(['syringe containing a powerful vaccine','a map of trade routes','a stew pot','scrap metal','a cleaver (d6)','stethoscope','bear trap','padlock','belt-lantern','a very engaging tall tale','very fine clothes','a failed marriage','crippling student debts','a specimen in a jar','musket (2h, d12, 1min reload), 10 bullets','a ballpoint pen','mortar and pestle','measuring tape','small anvil','small anvil'][p]);
        gear.push(['syringe containing a deadly virus','a bag: three doses of potent drugs','a bag: three doses of spices','a bag of nails, nuts, bolts, and screws','three servings of raw meat','stethoscope','bow (1d6), 10 arrows','lockpicks','headlamp','a book of stories, partially written','fabric, needle, and thread','an estranged child out there... somewhere','a PhD thesis, incomplete','a theory, unproven','bag of gun parts','journal, partially full',s(potions),'bag of nails, nuts, bolts, and screws','a unique '+s(weapons)+', unfinished','a unique set of'+s(armor)+', unfinished'][p]);
        break;

        case 14:
        p = r(4);
        description.push([' who is at the end of a distinguished military service.',' who trades blood for coin.',' who steals anything that is not nailed down.',' who has traveled a long, hard road.'][p]);
        backstory.push("Spent some time "+["in the army","as a mercenary","thieving and looting","on the hard roads"][p]+". [+1 HP and 2 items]");
        HP += 1;
        gear.push(['semi-auto rifle (d10), 5 bullets','handgun (d8), 5 bullets','a set of lockpicks','well-worn traveling garb (0 slots, significantly decreases weather/environmental effects)'][p]);
        gear.push(['an old army buddy owes you a favor','mercenary mission contract with lucrative reward','a fellow thief owes you a favor','well worn, comfortable boots (0 slots, cross difficult terrain without being slowed)'][p]);
        bonusname.push([[' the Deserter',', Lance-Corporal',', Drill Sergeant'][r(3)],[' the Mercenary',', Gun for Hire'][r(2)],[' the Thief',' the Brigand'][r(2)],[' the Wanderer',' the Nomad'][r(2)]][p]);
        break;

        case 15:
        p = r(7);
        description.push(' who has friends in '+['high','low'][r(2)]+' places.');
        backstory.push("Gained a contact "+["in a city-state","among eccentric wizards","among tribal shamans","amongst the nobility","in the dark places","in the dream world","deep in the forest"][p]+", they "+["owe you one","saved your life once","were a good friend back then","are the cause of your adventures","know your true nature","speak to you in your sleep"][r(6)]+". [a friend and a favor]");
        traits.push(['Has an urban socialite friend.','Has a wizard friend.','Has a shaman friend.','Has a friend in a high place.','Has a friend in the dark places.','Has a friend in the dream world.','Has a friend hidden in the forest.'][p]);
        gear.push('a favor, owed to you by a friend');
        bonusname.push([[' the Urban',' the Socialite',' the Cosmopolitan'][r(3)],[' the Arcane',' Wizard-Friend',' the Eccentric'][r(3)],[' Shaman-Friend',', Attuned with the Spirits',', Honorary Member of the Tribe'][r(3)],[', Esquire',', the Esteemed',' of the Landed Nobility'][r(3)],[' of the Dark Places',' the Shaded',' the Hidden'][r(3)],[' the Dreamer',' of the Dream World'][r(2)],[' of the Deep Woods',' Forest-Friend'][r(2)]][p]);
        break;

        case 16:
        description.push([' who has been mutated.']);
        backstory.push('Gained a hideous but possibly useful mutation.');
        HP += 1;
        traits.push(s(mutation));
        bonusname.push([' the Hideous',' the Adapted',' the Marred',' the Ugly'][r(4)]);
        break;

        case 17:
        p = r(4);
        description.push([' who is going to get rich or die trying.',' who enjoys the finer things in life.'][r(2)]);
        backstory.push('Learned a clever trick from '+['cat burglars.','acrobats.','rangers.','a stage magician.'][p]+' [an ability]');
        traits.push(['Cat Feet (reduce fall damage by 20ft, you can move after attacking in a round)','Lightweight (while unarmoured and under half inventory slots, advantage on DEX checks)','Danger Sense (50% chance to negate surprise, roll under WILL to remember details about a non-unique threat)','Fast hands: Can use two items per round.'][p]);
        bonusname.push([[' Lightfoot',' Nine-Lives'][r(2)],[' the Acrobatic',' the Balanced'][r(2)],[' Wildstrider',' the Roamer'][r(2)],[' the Astounding',' the Prestidigitator'][r(2)]][[p]]);
        break;

        case 18:
        p = r(6);
        description.push([' who enjoys the finer things in life.',' who is going to risk it all.',' who is on the run from the past.',' who chases the ultimate heist.'][r(4)]);
        backstory.push('Learned how to '+['forge documents.','smuggle goods.','steal.','spy.','climb.','gamble and win.'][p]+' [an ability]');
        traits.push('Advantage on checks made to '+['forge documents.','hide items on or about your person.','steal things without anyone noticing.','eavesdrop or disguise yourself.','climb.','cheat at gambling.'][p]);
        gear.push(['paper, quill and ink in a writing case','stolen goods ('+['medicine)','clothes)','metal)','food)'][r(4)],'satchel of "medicine"','codes and passphrases, slightly out of date','climbing gear','marked cards and loaded dice'][p]);
        bonusname.push([' the Scoundrel',' the Unlawful',', Wanted By the Law',' the Stealthy'][r(4)]);
        break;

        case 19:
        description.push(' who wanders the wilds.');
        backstory.push('Spent some time alone in the wilds. [a trait and an animal companion]');
        traits.push(['2-in-6 chance not to be surprised.','A highly acute sense of smell.','+1 Damage against creatures that are at least one size category larger than you.','Can travel through difficult terrain without being slowed.','Can communicate intent to animals through gestures.'][r(5)]);
        gear.push("a friendly "+['Trillipede','Hyper-Sloth','GigAmoeba','Vine-Dog','Giant Roach','Possum','QuickSlug','Dire Badger'][r(8)]+" companion.");
        bonusname.push([' Animal-Friend',' Beast-Tamer',', Tamer of Beasts',', Caretaker'][r(4)]);
        break;

        case 20:
        p = r(5);
        description.push([' who hunts the most dangerous game.',' who seeks the most dangerous foes.'][r(2)]);
        backstory.push('Hunted down a'+[' chimerical monstrosity',' deadly giant insectoid',' slithering abomination','n ocular fiend',' giant amoeba'][p]+'. [an ability, a monster part]');
        traits.push('+1 damage against a creature for each size category that it is larger than you.')
        gear.push(['skinned pelt, constantly shifting','severed venomous stinger','glowing monster guts','a severed eyestalk, constantly watching','chunk of primordial cell matter'][p]);
        bonusname.push([', Slayer',' Bane of Beasts',' Monstrosity-Bane',', Apex Predator'][r(4)]);
        break;

        case 21:
        p = r(3);
        description.push([' who is on the run from the past.']);
        backstory.push(['Looted a terrifying weapon off of a dead adventurer.','Stole a terrifying weapon from a military shipment.','Deserted the military, taking your weapon with you.'][p]+' [a weapon, a consequence]');
        gear.push(['scoped bolt-action sniper rifle (2h, 1d12, long range), 8 bullets','pump-action shotgun (2h, 2d8, short range), 6 slugs','automatic machine gun (requires setup, one person to aim and one to feed ammo, 1d6, 6 shots/round), 36 bullets','flamethrower (ignites in cone, could explode), a tank of fuel(3 shots)'][r(4)]);
        gear.push([`the pesky neutrino-ghost of a dead adventurer`,`the emnity of a powerful nation's military`,`the hangman's noose, waiting for you should you ever return`][p]);
        bonusname.push([', Inadvertent Gunslinger',' the Gunslinger',' Deadeye',', On the Run'][r(4)]);
        break;
        
        case 22:
        description.push([' who wishes to gain more followers.']);
        backstory.push('Discovered an aptitude for leadership. [an ability, a follower]');
        traits.push('Inspiring (the first time an ally assists you each session they - get advantage on their next damage roll, or heal 1d4 WILL stat damage, or mark an X.)');
        gear.push('a follower, '+['mostly obedient','here to make a quick buck','here to live out one of the stories','utterly besotted with you','looking for the truth','hoping to see you in action'][r(6)]);
        bonusname.push([' the Inspiring',', Inspiration of the Masses',', Chieftain',', First Among Equals'][r(4)]);
        break;
        
       case 23:
        p = r(5);
        ED += 1;
        description.push([' who seeks greater technological power.']);
        backstory.push('Gained a cybernetic augmentation '+['through reconstructive surgery.','due to volunteering for an experiment.','from an involuntary experiment.','from a nanobot infection.'][r(4)]+' [a skill, an implant]');
        traits.push(['Skill - Inbuilt capacitor: 1ED, you can absorb/redirect 1ED from an electrical attack. You can also siphon energy from an electrical source: take 1d6 damage to a stat, gain an ED.','Skill - Pneumatic frame: 1ED, you can double damage for an attack or get advantage on a PHY check.','Optical Medscanner: 1ED, scan a biological creature to learn its current HP and any diseases, wounds, or afflictions it might be suffering from.','Electromagnetic Sensor Array: Series of antennae protruding from your skull. When a nearby ED is spent, the sensors tell you what type of ability is being used.','Reassembling Nanoface: 1ED, latent nanobots emerge from your sinus cavity and rapidly reconstruct your face to look like another member of your race.'][p]);
        gear.push(['Implant: inbuilt capacitor','Implant: pneumatic frame','Implant: optical medscanner','Implant: electromagnetic sensor array','Implant: reassembling nanoface'][p]);
        bonusname.push([' the Rebuilt',' the Augmented',' the Reconstructed'][r(3)]);
        break;

        case 24:
        p = r(4);
        description.push([' who seeks to spread their fame and glory.']);
        backstory.push('You became famous for '+['being a complete and utter scoundrel','being a monster on the battlefield','your cunning battlefield tactics','smiting your foes'][p]+'. [an ability]');
        traits.push([`+1 damage versus foes that cannot see you.`,`Staggering blow: if you deal more than half an enemy's hp in damage in a single hit, they must save or be stunned.`,`Tactic: spend your action to have a nearby ally attack.`,`Smite: when you attack, spend 1ED. Extra damage = result.`][p]);
        bonusname.push([', Famed Scoundrel',' Warmonger',' the Cunning',' the Deadly'][p]);
        break;

        case 25:
        description.push([' wishes to gain more bizarre abilities.']);
        backstory.push('Gained a bizarre ability. [an ability]');
        traits.push(["Decay avoids you, things do not rot while carried by you or when they are on your person.","You can use gestures and body language to communicate your intent to animals.","Cast-Iron Stomach: Advantage to PHY tests to resist harmful ingested substances.","You don't leave footprints."][r(4)]);
        bonusname.push([[', Whom Decay Avoids',' Herald of Preservation'][r(2)],' Beast-Speaker',' Cast-Iron',' the Traceless'][p]);
        break;

        case 26:
        p = r(7);
        ED += 1;
        description.push([' who wishes to free themselves from a sinister pact.']);
        backstory.push('Made a deal with '+['a voice from deep within the earth','a voice from the deepest part of your dreams','a voice from the stars','a mysterious spirit of the land','a sentient virus','the silver queen','the machine gods'][p]+'[1ED, a power, a cost]');
        traits.push(['Power - Shape earth: result = amount shaped.','Power - Dream Augury: 1ED/question, result = accuracy.','Power - Summon: Go on, use it. You know you want to.','Power - Confusion: Target takes random actions, duration = result, powerful foes get a save.','Power - Tame Virus: You can tame viruses and store them within yourself to inflict on others. 1ED to manipulate.','Power - Blink: Small teleport, does not use an action. Distance = result.','Power - Flesh to Steel: Duration = result. Powerful foes get a save.'][p]);
        gear.push('a distinct lack of '+['a soul','family or friends','a home to return to','mental stability','the ability to love','a certain future'][r(6)]);
        bonusname.push([' Enraptured',' Pact-Bound',' Star-Crossed',' Soulbound',', Infected',' the Argent',' Mechanicus'][p]);
        break;
        
        case 27:
        p = r(2);
        description.push([' who seeks glory for their martial order.']);
        backstory.push('Joined the martial order of the '+['Qoren Wraiths','Mantis Monks','Geneshifters'][p]+' [an ability, an item]');
        traits.push(['Flash strike: when you kill someone, spend 1ED to blink a short distance and attack again.','Spend 1ED and your action to leap 30ft and make an attack. If you deal max damage, knock the target off their feet.','When you strike someone, spend 1ED to steal their appearance, a mutation, or a characteristic for a day.'][p]);
        gear.push(['a thin blade, its form flickering like silver fire (can shift in and out of existence at will, appearing in your hand)','inner peace (erase both this and a trauma)','constantly shifting weapon (can imitate any nonmagical melee weapon)'][p]);
        bonusname.push([' Wraithstorm',' of the Ascendant Way',' the Mutable'][p]);
        break;
        
        case 28:
        p = r(4);
        description.push([' who is marked by strange events.']);
        backstory.push('Has beautiful, terrifying dreams of'+['the heat death of the universe','being a pawn in an imaginary game played by puppet master gods','the world ending in a hail of golden fire','endless screaming'][p]+'.');
        traits.push(['Notify the GM that you got this result. They will know what to do. This is not ominous at all...']);
        bonusname.push([' the Entropic',', Breaker of the Fourth Wall',', Herald of the End',' the Completely Screwed'][p]);
        break;

        default:
          console.log('No event details found.');
        break;
  }

}

if((gear.length+invWeight)<5) gear.push(weapons[Math.min(r(13),r(14))]);

var t=0;



























var name1 = [
		"Eze",
		"Jer",
		"Siri",
		"Ja",
		"Nat",
		"Gor",
		"Grod",
		"An",
		"Leo",
		"Agra",
		"Mem",
		"Heri",
		"Den",
		"Grigo",
		"Vido",
		"Pelli",
		"Stra",
		"Lumi",
		"Luna",
		"Re",
		"Max",
		"Vash",
		"Xor"
	];

var name2 = [
		"kiel",
		"emia",
		"ko",
		"thew",
		"lise",
		"gar",
		"mar",
		"dak",
		"drif",
		"dron",
		"tus",
		"medes",
		"non",
		"ates",
		"hov",
		"sch",
		"grin",
		"vic",
		"rov",
		"mar",
		"jec"
	];

var name3 = [
		"a",
		"o",
		"i"
	];

var name4 = [
		"Yl'",
		"Id",
		"Bin",
		"O'",
		"Ir",
		"Ul",
		"Yn",
		"An"
	];

var name5 = [
		"Xi",
		"Od",
		"Sha",
		"Tiri",
		"Ka",
		"Ar",
		"Bel",
		"Rel",
		"Bur",
		"Al"
	];

var name6 = [
		"mar",
		"rin",
		"ber",
		"arth",
		"gath",
		"sus",
		"ro",
		"zul",
		"kul",
		"ko"
	];

var fullname = [
		s(name1)+s(name2)+s(name3),
		s(name1)+s(name2)+s(name3)+" "+s(name4)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6)+s(name3),
		s(name1)+s(name2),
		s(name1)+s(name2)+" "+s(name4)+" "+s(name5)+s(name6),
		s(name1)+s(name2)+s(name3)+" "+s(name4)+" "+s(name5)+s(name6),
        s(name1)+s(name2)+" "+s(name4)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6)+s(name3),
    ];











































var search = vrace;

switch(search) {

      case 'Human': case 'True Human':
      var name1 = [
		"Eze",
		"Jer",
		"Siri",
		"Ja",
		"Nat",
		"Gor",
		"Grod",
		"An",
		"Leo",
		"Agra",
		"Mem",
		"Heri",
		"Den",
		"Grigo",
		"Vido",
		"Pelli",
		"Stra",
		"Lumi",
		"Luna",
		"Re",
		"Max",
		"Vash",
		"Xor"
	];

var name2 = [
		"kiel",
		"emia",
		"ko",
		"thew",
		"lise",
		"gar",
		"mar",
		"dak",
		"drif",
		"dron",
		"tus",
		"medes",
		"non",
		"ates",
		"hov",
		"sch",
		"grin",
		"vic",
		"rov",
		"mar",
		"jec"
	];

var name3 = [
		"a",
		"o",
		"i"
	];

var name4 = [
		"Yl'",
		"Id",
		"Bin",
		"O'",
		"Ir",
		"Ul",
		"Yn",
		"An"
	];

var name5 = [
		"Xi",
		"Od",
		"Sha",
		"Tiri",
		"Ka",
		"Ar",
		"Bel",
		"Rel",
		"Bur",
		"Al"
	];

var name6 = [
		"mar",
		"rin",
		"ber",
		"arth",
		"gath",
		"sus",
		"ro",
		"zul",
		"kul",
		"ko"
	];

var humanname = [
		s(name1)+s(name2)+s(name3),
		s(name1)+s(name2)+s(name3)+" "+s(name4)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6)+s(name3),
		s(name1)+s(name2),
		s(name1)+s(name2)+" "+s(name4)+" "+s(name5)+s(name6),
		s(name1)+s(name2)+s(name3)+" "+s(name4)+" "+s(name5)+s(name6),
        s(name1)+s(name2)+" "+s(name4)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+" "+s(name5)+s(name6)+s(name3),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6),
        s(name1)+s(name2)+s(name3)+" "+s(name5)+s(name6)+s(name3),
    ];
    fullname = humanname[r(10)];
      break;

      case 'Floran':
var floranname1 = [
"Chlor",
"Den",
"Cham",
"Chrys",
"Ros",
"Ras",
"Dahl",
"Delph",
"Di",
"Ech",
"Helle",
"Hy",
"Ir",
"Jun",
"Lil",
"Oph",
"Sal",
"Thy",
"Tri",
];

var floranname2 = [
"dro",
"dra",
"al",
"anth",
"dox",
"in",
"ia",
"ina",
"ol",
"is",
"i",
"via",
"cen",
"fol",
"",
"",
"",
"",
"",
"",
""
];

var floranname3 = [
"phyll",
"phyte",
"cyte",
"sis",
"ium",
"us",
"cea",
"em",
"",
"",
"",
"",
"",
"",
""
];

fullname = floranname1[r(19)]+floranname2[r(21)]+floranname3[r(15)];

    break;

      case 'Scablander':
var scabname1 = [
 'Eze',
 'Jer',
 'Siri',
 'Ja',
 'Nat',
 'Gor',
 'Kor',
 'Dro',
 'Grod',
 'An',
 'Leo',
 'Agra',
 'Mem',
 'Heri',
 'Den',
];
var scabname2 = [
 'kiel',
 'emi',
 'ko',
 'hew',
 'lis',
 'gar',
 'mar',
 'dak',
 'drif',
 'dron',
 'cles',
 'tus',
 'medes',
 'non',
 'ates',
];
var scabname3 = [
 'a',
 'a',
 'a',
 'o',
 '',
 'i',
 '',
 '',
 '',
 '',
 ''
];
fullname = scabname1[r(15)]+scabname2[r(15)]+scabname3[r(10)];
      break;

      case 'Kobold':
var koboldname1 = [
'Ra',
'Za',
'Kri',
'Khe',
'Kro',
'Vho',
'Rek',
'Dak',
];
var koboldname2 = [
'za',
'zi',
'zu',
'tik',
'da',
'di',
'ta',
'ti',
];
var koboldname3 = [
'ssk',
'liss',
'lissk',
'tikk',
'ss',
'',
'',
''
];
fullname = koboldname1[r(8)]+koboldname2[r(8)]+koboldname3[r(8)];
      break;

      case 'Android':
var vocab1 = [
    'Dynamic-',
    'Efficient-',
    'Advanced-',
    'Uplinked-',
    'Networked-',
    'Counter-',
    'Upgraded-'
    ];
var vocab2 = [
    'Repair',
    'Observation',
    'Intelligence',
    'Data',
    'Calculation',
    'Communications',
    'Discovery'
    ];
var andname1 = [
    'Chromium ',
    'Barium ',
    'Thorium ',
    'Radium ',
    'Radon ',
    'Argon ',
    'Xenon ',
    'Palladium ',
    'Strontium ',
    'Tellurium ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    vocab1[r(7)]+vocab2[r(7)]+' ',
    ];
var andname2 = [
    'Alpha ',
    'Beta ',
    'Gamma ',
    'Delta ',
    'Epsilon ',
    'Zeta ',
    'Theta ',
    'Iota ',
    'Omicron ',
    'Rho ',
    'Sigma ',
    'Tau ',
    'Omega ',
    'Tarsos '];
var andname3 = r(1000);
      fullname = andname1[r(17)]+andname2[r(14)]+andname3;
      break;

      case 'Mantis':
var mantisname1 = [
'Zzi',
'Zza',
'Zzu',
'Xi',
'Xa',
'Kka',
'Kko',
];
var mantisname2 = [
'ka',
'zzi',
'zza',
'xi',
'xa',
'ko'
];
var mantisname3 = [
'ra',
'ri',
'ro',
'ru',
'za',
'ka',
'ko',
'',
'',
'',
'',
''
];
fullname = mantisname1[r(7)]+mantisname2[r(6)]+mantisname3[r(12)];
      break;

      case 'Oozeling':
var oozename1 = [     //DIS NAME (I'm so sorry)
'Glorp',
'Blorp',
'Glub',
'Blub',
'Schlorp',
'Schlub',
'Plop',
'Blip',
'Plip'
];
var oozename2 = [
'glorp',
'blorp',
'glub',
'blub',
'schlorp',
'schlub',
'plop',
'blip',
'plip'
];
var oozename3 = [
'le',
'ub',
'up',
'',
'',
'',
'',
''
];
      fullname = oozename1[r(9)]+oozename2[r(9)]+oozename3[r(8)];
      break;

      case 'Mushroom':
var mushroomname1 = [
 'Xor',
 'Xixi',
 'Zzar',
 'Lha',
 'Yyi',
 'Yogg',
 'Cthuhl',
 'Fhuhl',
 'Pfhlit',
 'Whahgl', 
 'In',
 'O',
 'I',
 'Zo',
 'Od'
];
var mushroomname2 = [
 'zzar',
 'xlor',
 'kkara',
 'dhar',
 'daxx',
 'ggath',
 'htagn',
 'hlagnar',
 'hlormm',
 'llorch', 
 'inium',
 'ja',
 'o',
 'on',
 'za'
];
var mushroomname3 = [
 'a',
 'a',
 'a',
 'o',
 'i',
 '',
 '',
 '',
 '',
 ''
];
fullname = mushroomname1[r(15)]+mushroomname2[r(15)]+mushroomname3[r(10)];
      break;

      case 'Silic':
var silicname1 = [
'Carbor',
'Allar',
'Alder',
'Sel',
'Sil',
'Sul',
'Fel',
'Ful',
'Gor',
'Gol',
'Crag',
'Brag',
'Grag',
'Bis',
'Bron',
'Chal',
'Diad',
'Erith',
'Hept',
'Ilm'
];
var silicname2 = [
'un',
'in',
'en',
'ur',
'or',
'ir',
'an',
'man',
'tan',
'zan',
'zon',
'muth',
'canth',
'baz',
'lo',
];
var silicname3 = [
'dum',
'ium',
'um',
'din',
'ic',
'on',
'ite',
'drite',
'ine',
'drine',
'site',
'',
'',
'',
'',
];
fullname = silicname1[r(20)]+silicname2[r(15)]+silicname3[r(15)];
      break;

      case 'Trilobite':
var triloname1 = [
'The-Bane',
'The-Soundless-Knife',
'The-Star-Stone-Eye',
'The-Echo-of-Stone',
'The-Unsaid-Word',
'The-Sacrifice',
'Death-Knows-It',
'The-Silent-Knot',
'The-Broken-Promise',
'Men-Fear-It',
'The-Watcher'
];
var triloname2 = [
'-that-Paints',
'-that-Wanders',
'-who-Saw',
'-who-Weeps-for',
'-that-Flees-from',
'-that-Waits-for',
'-that-Dreams-of',
'-who-Ponders',
'-who-Seeks',
'-who-Questions',
'-who-Defies',
'-who-Brings',
'-who-Spurns'
];
var triloname3 = [
'-the-Earth',
'-Sunless-Paths',
'-the-Beginning',
'-the-Deep',
'-the-Dying-Flame',
'-Silence',
'-the-End',
'-the-Light',
'-the-Dark',
'-the-Churnings-of-Fate',
'-the-Last-Gasp',
'-the-Final-Scream'
];
      fullname = triloname1[r(11)]+triloname2[r(13)]+triloname3[r(12)];
      break;

      case 'Olm':
var olmname1 = [
'Eats',
'Smells',
'Licks',
'Bites',
'Slices',
'Sharpens',
'Wounds',
'Carves',
];
var olmname2 = [
'-the-Bones',
'-its-Teeth',
'-the-Blood',
'-the-Meat',
'-the-Prey',
'-its-Skin',
'-their-Eyes'
];
var olmname3 = [
'-in-Darkness',
'-in-Silence',
'-in-Water',
'-in-the-Depths',
'-When-None-are-Looking',
'-and-Laughs',
'-and-Shivers',
'-and-Smiles',
'-and-Wonders',
'-and-Waits'
];
fullname = olmname1[r(8)]+olmname2[r(7)]+olmname3[r(10)];
      break;

      case '[REDACTED]':
      fullname = '[REDACTED]';
      break;                

}

name = fullname;

















var items = [
 'rope',
 'a box of matches',
 'caltrops',
 'geiger counter',
 'bandages',
 'neosporin',
 'bottle of high-proof liquor',
 'spool of copper wire',
 'fishing rod',
 'a canister labeled, '+s(potions),
 'shield',
 'grapple hook',
 'a bucket of iron spikes',
 'padlock',
 'key #'+d(1,100),
 'bucket of pitch',
 'wooden pole',
 'sack of flour',
 'bag of nails and hammer (1d6)',
 'a Claymore anti-personnel mine',
 'a canister of lard',
 'a canister of gasoline',
 'brick of C4, detonator',
 'three throwing knives (1d6)',
 'chain, 10ft',
 'grimy gambeson',
 'a bottle labeled, '+s(potions),
 'lantern and oil',
 'plunger',
 '9 rations',
 'bear trap',
 'bottle of poison',
 'a peasant, utterly devoted to you',
 'healing herbs, three doses',
 'lockpicks',
 'vial of acid',
 'flash drive',
 'a bottle of poison',
 'a small but powerful magnet',
 'an ampoule labeled, '+s(potions),
 'bottle of laudanum',
 'pliers, loop of wire',
 'jar of glue',
 'weighty iron tongs',
 'two metal flasks',
 'flint and steel',
 'small tent',
 'small metal mirror',
 'bag of chalk',
 'a beaker labeled, '+s(potions),
 'floppy disk',
 'shiny locket',
 'laser pointer',
 'canister of grease',
 'flute',
 'towel',
 'a vial labeled, '+s(potions),
 'strange fungus in a jar',
 'heavy-duty boots',
 'three smoke bombs',
 'a frag grenade',
 'a smoke grenade',
 'an EMP grenade',
 'a healing nanite grenade',
 'a repair nanite grenade',
 'a stick of dynamite',
 'five bags of potent spices',
 'sturdy shears',
 'silver needle and silken thread',
 'large wheel of expensive cheese',
 'three lengths of heavy iron pipe',
 'large thermos',
 'a roll of duct tape',
 'a spiral notebook and pencil',
 'satchel of charcoal',
 'warm jacket',
 'pickaxe',
 'jackhammer',
 'bag of salt',
 'empty oil drum',
 'a vial that says, '+s(potions),
 'hefty tarpaulin',
 'jar of space-leeches',
 'binoculars',
 'fancy clothes',
 'bearskin',
 'surgical saw',
 'bag of questionable mushrooms',
 'whittlin knife',
 'a tiny, batteryless shortwave radio',
 'mortar and pestle',
 'a carton of cigarettes',
 'a vial that says, '+s(potions),
 'molotov cocktail',
 'bag of ball-bearings',
 'adhesive tape',
 'aerosol can of spraypaint',
 'a small thaumic battery (empty)',
 'a small thaumic battery (full)',
 'a small thaumic battery (solar, empty)',
 'a journal, partially full',
 'a truly amazing sandwich',
 'a small, loyal, noisy dog',
 'a bag of salvaged scrap',
 'a digital camera',
 'a can of oil',
 'a can of gasoline',
 'a flashlight (almost out of power)',
 'a parasol',
 'a can of pepper spray',
 'flashbang grenade',
 'a gas mask',
 'a welding mask',
 'a power drill (almost out of battery)',
 'a tape recorder (almost out of battery)',
 'a nailgun (almost out of battery)',
 'a small thaumic battery (blood)',
 'nutrihealth (tm) energy bar',
 'packet of instant ground coffee'];

  for (i = 0; i < randItems; i++) {
      gear.push(s(items));
  }

gear.push("3 small thaumic batteries","3 rations");

if (gear.includes("9 rations")) invWeight += 2;
if (gear.includes('a peasant, utterly devoted to you')) invWeight -= 1;









bonusname1 = [s(bonusname),"",""];

bonusnamereal = s(bonusname1);

if (vrace.includes('Trilobite')||vrace.includes('Olm')||vrace.includes('Android')) {
bonusnamereal = "";
}

description1 = [s(description)];

descriptionreal = s(description1);


var e = r(21)



document.getElementById("name").innerHTML = "<b>Name: </b>"+name+bonusnamereal;
document.getElementById("race").innerHTML = "<b>Race: </b>"+bonusrace+vrace;
document.getElementById("desc").innerHTML = simpleDesc+" "+descriptionreal+bonusdesc;
document.getElementById("physique").innerHTML = "<b>PHY: </b>"+PHY;
document.getElementById("dexterity").innerHTML = "<b>DEX: </b>"+DEX;
document.getElementById("will").innerHTML = "<b>WILL: </b>"+WILL;
document.getElementById("ED").innerHTML = "<b>ED: </b>"+ED;
document.getElementById("HP").innerHTML = "<b>HP: </b>"+HP;

for (var y = 0; y<backstory.length; y++) {
document.getElementById("backstory").innerHTML += backstory[y]+"<br>";
}

for (var i = 0; i<traits.length; i++) {
  document.getElementById("traits").innerHTML += traits[i]+"<br>";
}

invWeight += gear.length;
for (var it = 0; it < gear.length; it++) {
  if(gear[it].search(/(0 slots)/)!= -1) invWeight--;
}

gear[0] += ' ('+invWeight+'/10 slots filled';
if(invWeight>13) gear[0] += ', heavily overencumbered, disadvantage on all checks):';
else if(invWeight>10) gear[0] += ', disadvantage on DEX checks):';
else gear[0] += '):';

for (var j = 0; j<gear.length; j++) {
  document.getElementById("inventory").innerHTML += gear[j]+"<br>";
}


}

</script>

