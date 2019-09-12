function r(c) {return Math.floor(Math.random() * c);}

var vname1='';
var vname2='';

var vclass='';
var strength = '';
var speed = '';
var intellect = '';
var combat = '';
var sanity = '';
var fear = '';
var body = '';
var armor = '';
var saves=[];
var stress=[];
var skills=[];
var xp=[];
var gear=[];
var nightmare=[];


function showhide688(){
    var x = document.getElementById("creditinfo688");
    if (x.style.display === "none") {
        x.style.display = "table";
    } else {
        x.style.display = "none";
    }
}

function showhidemaster(){
    var x = document.getElementById("master688");
    if (x.style.display === "none") {
        x.style.display = "table";
}

}

function fmomshipclass688(zorp){

var nightmare688 = [

`Your migraine is splitting your skull. A dog rushes towards you, its eyes full of loving devotion. The dog's head explodes into a crimson mist, coating your hands like an accusation.`,
`Your jaw unhinges as you vomit a torrent of earwigs.`,
`You are having sex with someone with the face of an ant; they regard you coldly and whisper something you can't quite hear.`,
`You draw a straight razor across your mother's eye. This is the right thing to do. She does not resist.`,
`There is a steady tick-tock of an egg-timer in your chest. You know something terrible will happen when it rings. There is no clear way to stop it.`,
`An amber scorpion crawls on your face. Your limbs are leaden anchors a million miles away.`,
`You swim frantically, uncertain of what direction you are swimming in. The water is like ink, your lungs are bursting.`,
`You look at your hands. They fall apart like puzzle pieces. You cannot stop thinking about your 7th birthday.`,
`A crowd of beautiful, slim, fashionable, and elegant people stare at you derisively. You drop your drink. They laugh with cruel sensual smiles.`,
`Your ribs swell to make space for the blind orgy of wasp larva. You think about motherhood as your flesh stretches to its breaking point. The larva burrow out and unfold their iridescent wings.`,
`You are in a pale room. You hear children's laughter. You cannot pinpoint the source.`,
`You feel the trapdoor spider making its home in your throat; you know what you have to do. Jamming the blade in is as simple as carving butter. You wiggle it around with satisfaction. You missed.`,
`A weathered hag sits on your chest, her mouth a hideous O of accusations. It won't stop dripping pale fluids on your face.`,
`You hear panicked screams in the darkness: they're growing fainter, you are running away.`,
`Pale hands press against darkened glass. You are surrounded. Alone.`,
`No matter how much you struggle or bat them away, the crows are relentlessly consuming your face.`,
`You smell moss and dirt. Inane stammering and chanting fills your ears. They are coming for you.`,
`Figures flit about in the hanging fabric. You can't quite make them out, they seem familiar. You aren't certain if you are the hunter or the quarry.`,
`Your fingernails tear from their moorings as you futilely scrabble against the rough wall. The hole atop the shaft, your only escape, is as distant as the sky.`,
`Your eyes melt, crawling down your face like limpid tears. Your skin starts sloughing off. Your muscles fall off with a meaty slap. Maybe this face is not yours.`,
`You feel the slender fingers encircle your throat; there are too many of them, they are far too long and thin. Everything smells like camphor.`,
`A carousel spins madly - the music hellish, discordant. The horses' eyes are meeting yours.`,
`You can smell the rot in your bones. You struggle to dig them out.`,
`Your face warps and shifts - stretching and pulling against its own definition. It becomes bovine. Your friends are leading to a grey, cement building. Everything smells like copper.`,
`Your fingers unwind like meaty corkscrews; they start anchoring you in place. The wind is cold.`,
`Your teeth blacken and rot. They crowd laughs uproariously. Nails drive through your putrid gums in a birth of pus and blood. You bite their faces away. They taste like cinnamon.`,
`A bulbous, fleshy eyeless face hunts you in the dark. Its steps are deliberate. It has already found you.`,
`A puppet gazes up at you. A mockery of human features - exaggerated, stretched. Its hands spring into action, manipulating your strings. You dance a macabre waltz.`,
`A red sun slowly rises. The light carbonizes your toes, feet, legs. You watch. The smell of cooking meat overwhelms you.`,
`You fight a current of blind, swollen, pale fish to reach the masticating maw. There is a smell of jasmine.`,
`Your wrist bends back. It keeps bending. Your hand is your in your arm.`,
`The shambling figure is dark, save a chipped porcelain mask. The air is haze with the smell of candy and rot.`,
`Every door is labeled exit despite taking you back to the start of the corridor. You have been here before.`,
`You pin the fish down. You bash its gasping face with a hammer. You can't stop. You won't stop.`,
`The music is pleasantly generic; the waiting room sterile. How long have you been here? How long will you remain?`,
`The skeletal cats need to be fed. They yowl, they fornicate, they piss. The air is thick with ammonia, wet with humidity. You lose count.`,
`You sip wine as she nails your fingers to the table. You have long, elegant hands.`,
`You stab the featureless body with a baby doll head, over and over. A torrent of red ants crawls from the womb.`,
`Your fingers are jagged snarls of glass. You caress yourself. You can't feel how sticky your fingers are.`,
`The dinner party is lovely. Then you notice the centipedes crawling from your collar; hear the snide comments.`,
`The children dash ahead of you. Their rabbit masks are askew. You need to bring them home. You stumble.`,
`You feel them growing behind your eyes. Your vision dims. You are the host and they are nothing like you.`,
`The pliers are getting red hot. The air is damp and unctuous. You don't really need all those fingernails, not when you have so many toes.`,
`The ground is dry and desolate. Your drool pools by your face. You sink into the lukewarm puddle.`,
`It is cold. Your fingers blacken. You could snap them off if your hand could move. The cold scours everything away.`,
`You float in a void of deep space. A planet-sized foetus regards you with lugubrious, watery eyes.`,
`Poison gas fills the warrens. Blood seeps from their eyes as their despondent screams echo in your ears. Mocking laughter shakes your ribs like a bass note.`,
`He splatters his cravat with viscera when he cuts your hand off. You roll on the floor. You cauterize the stump with a hot plate. You line up your shot at the retreating figure. He spins around and shoots first.`,
`Your incisors won't stop growing. They pry your jaw apart, your mouth wider and wider, lips bleeding from the strain, teeth grinding into gums. The snap will be a relief.`,
`You feel it churning inside you. Wrapping itself in your entrails. Kicking against the stomach wall. Waiting to break free, you can feel the grin fill the hollow of your belly.`,
`Filthy, louse-ridden children pelt you with stones. They know what you did.`,
`You bash the figure across the face with a rock. Your hands seek purchase on their face and you confidently press your thumbs into the eye sockets. Your own tortured face grins back.`,
`The sinuous reptiles circle you warily, languid motions at incredible speed. Their tongues taste the air, taste your body, your sweat tying them to you. Any second they will close in, their snapping jaws slathered with miasma.`,
`You crush the nimbus-blue egg in your hand. Amidst the splintered shell fragments is the partially formed baby bird. It stares back at you with eyes like black marbles. Then you notice the teeth.`,
`Children with sunken eyes and rotted teeth chant, "SACRIFICE, SACRIFICE". They push you, you fall. Their faces fade in the distance. You keep falling.`,
`You trudge through a landscape blanketed in bones. They snap and crunch underfoot. Drifts of them knee deep and pulling you gradually under. They rattle as you descend.`,
`You walk towards the horizon. You pass a burning car and the air is thick with malodorous smog. Your skeleton stops walking and is left behind. Your shadow tells you your real bones have been replaced.`,
`You are in a pool. The water is warm. Tropical fish peck away at you. Each bite is a papercut. You feel your legs gradually vanishing one small bite at a time. You can't see an exit.`,
`You are lying on the beach tangled in nets. The tide keeps rising up towards your face, gradually but inexorably. Gulls squabble and circle in the baking sun.`,
`Your face is smothered in kisses, teeth scraping your brow. A sudden rough bite and pull on the cheek until it tears, leaving a hole. A tongue presses the fringes of the new oriface.`,
`You walk on broken glass, barefoot. The wet cracking of the shards is your only companion save a floating red lantern illuminating the seemingly endless expanse of glass.`,
`The person talking to you is so unpleasant the world seems to curdle from the rancidness of their presence. Their hand is on your knee.`,
`A robot regards you. It mirrors your motions. It mimics your emotions. It takes your name.`,
`You feel sick, feverish, desperate. The bullet lodged in your gut is necrotizing too fast, spiderwebs of dying, blackened, leaking flesh.`,
`You are digging up a skeleton, the bones are impossibly fine, elegant even. The face long and gaunt, mournful. The wings so wide they consume the sky.`,
`The hammer feels momentous, pitted surface spattered with rust. You see the children with lamb's faces. You silence their frenzied bleating.`,
`You bleed the pigs. All of them. In their fine jewelry and spotless dinner jackets.`,
`The bolt cutters pass through your joints roughly. The end announced by a smooth click. Your finger is discarded into the bucket. The bucket chews noisily.`,
`You claw at the glass, your husk withering. They dispassionately take notes on clipboards. You desiccate and blow away in a fine spray of dust. They nod, approving.`,
`The Leviathan blots out the sun. The air ruptures as it breathes in. Its multifaceted eyes gaze upon you uncomprehendingly.`,
`Unnaturally white teeth grin at you, gleaming. The smile is forced. The laughter is a blade dragged against glass.`,
`The sky is an ink black horizon of tentacles and blazing vermilion eyes. It falls upon you like an avalanche. Tentacles force their way into your eyes, your mouth, down your throat. Your need is not slaked.`,
`Your hands are bound behind your back. The burlap over your head is tight, sucking in with your breath - the smell of kerosene overpowering. You feel wet, tired. You hear the scratch of a match being struck.`,
`You clip your nails. You keep clipping them. It won't stop. You see bone.`,
`You're at the end of the dock. Everything stinks of salt and rotting fish. Your feet squelch pointlessly in the concrete. They smoke cigarettes and leer at you. They're coming over to push you.`,
`You follow the woman in the red damask dress through the hedge maze. She's just out of reach. Her scent, peach blossoms, wafts behind her. You corner her. She turns around. There is no face, just a sunken pit with fleshy teeth.`,
`Scabrous rats - wounds dripping with pus - crawl all over you. They smother you with their wet, stinking bodies, force your way into your mouth and explore you. Where are your arms?`,
`You drive the nails into your leg. 1-2-3-4...99-100. Aghast, you realize your pattern isn't symmetrical. You pry them out and start again - perfect this time.`,
`You see sharks circling in the wine dark sea. You are bleeding. It won't stop.`,
`The ship controls won't respond, all the systems are down. You are slowly drifting towards a sun. You perspire, your hands slipping as you struggle to stop the ponderous drift.`,
`You are beneath an immense pendulum. With each swing, you feel years drain away. Your teeth disintegrate, your nails grow and twist, your vision dims, your hair becomes dust.`,
`Your arms are dragged in opposite directions as they are fed into gears. You feel the crushing weight and the tears forming in your muscles. Everything reeks of grease and rust.`,
`The airlock is slowly opening. Behind the glass they point and laugh. Your face is wet with tears. They enjoy slices of cake.`,
`You are engulfed in flame. No one seems to notice. Even when you touch them, spreading the flame. Vacant eyes.`,
`You're bleeding from the mouth. Ropes of it suspended from your lips. The viscera moving of its own accord.`,
`You are crouched behind a crate. Pinned down by automatic arms fire. You can't clear the jam.`,
`There's a pulse grenade in your hands. You can't remember how to throw, your fingers are useless. Everyone is disappointed.`,
`The mouth in your torso is hungry. It wants your friends. There are rewards for compliance.`,
`The conversation is charming, civil, courteous. The problem is they're holding your hand in acid.`,
`A drill descends towards your eye. The whirr fills the air, gives it texture. They ask how you are feeling.`,
`No matter how many volts you deliver to the subject, he won't divulge the information. He can't last much longer, you hope. They are getting impatient.`,
`Your lips are being sewed shut. The needle dances in and out. There is something in your throat: you deserve this.`,
`You tear wrapping paper desperately from the gifts, shredded colorful paper piles up to your knees. The antidote is in one of these. It has to be.`,
`They deliver shocks to you. They ask you to prove you aren't a machine. They don't believe you.`,
`The snake is swallowing you. Everything smells of offal and carrion. It moves up your legs, relentless, devouring.`,
`Your fingers split and mutate into baby hands. The new hands repeat the process. The hands are getting heavy.`,
`Your arms become snakes. The snakes start biting you. You reach out towards your friends, to share.`,
`The walls are closing in. Only when you close your eyes. Remain vigilant.`,
`You keep trying to scoop your guts back in; glistening ropes of your intestines wriggling and slipping in your hands. You've shoveled so much in. There should be an end to this.`,
`It is hot. It is dark. It is cramped. It is dusty. You are trapped.`,

];

var ldexcav=[
    "<b>Excavation</b><br> <b>Crowbar:</b> Advantage on Strength checks to open jammed airlocks/lift heavy objects.<br><b>Hand welder:</b> 1d10 damage CQC. Ultra heat emitter: Cuts airlocks/heavy doors. -10 vs. Armor Save.<br><b>Laser cutter:</b> 1d100 damage. 25m/250m/700m. Reload 1 round, 1/shot. 6 shots before lengthy recharge. <br> <b>Body cam:</b> Camera worn on clothing, can stream video back to control center so other crew members can see what you’re seeing.<br><b>Bioscanner:</b> Scan the immediate area for signs of life for 100m in all directions. Blocked by most known metals. Can tell location of signs of life, but not what that life is.<br><b>Short-Range Comms:</b> Communicate ship-to-ship within reasonable distance, surface-to-surface within a dozen kilometers.<br><b>Infrared goggles:</b> Wearer sees heat signatures, sometimes several hours old. <br> <b>Lockpick set:</b> Advanced tools for hacking basic airlock/electronic door systems. +10% on rolls made to open these doors.<br><b>Magboots:</b> Magnetic grip, allows wearer to easily to walk on the surface of a ship (in space, while docked or free-floating), or metal based asteroids.<br><b>Vacsuit:</b> +7 Armor Save. Holds enough O2 for 12 hours, or 6 hours under stress. Contains short range comms and two headlamps. Disadvantage to Speed checks. If punctured, internal monitor will sound announcing decompression within 60 seconds."
];

var ldexplore=[
    "<b>Exploration</b><br><b>Vibechete:</b> CQC, 2d10 damage, Crit: hack off limb. Cuts through dense forestry, but not metal doors, airlocks, etc.<br><b>Rigging gun:</b> 2d10, Crit: impale for triple damage. 10m/30m/100m. 1 Retractable Harpoon/metal cable: Body/ instinct save or become entangled. +1d10 damage when grapnel is pulled out of target.<br><b>Flare gun:</b> 1d10 damage, 5m/10m/20m High-intensity flare: Visible from 25km away. 2 shots.<br><b>First-aid kit:</b> When used adds +10% to rolls made to bandage wounds and stop bleeding.<br><b>Survey kit:</b> Allows for quick mapping of a nearby few kilometers on planet's surface, gathers data on air breathability/gravity/other important features of the surrounding landscape.<br><b>Water filter:</b> Can pump 50 liters of filtered water/hour.<br><b>Locator:</b> Allows crew members at a control center (or on the bridge of a ship) to track wearer's location.<br><b>Rebreather:</b> Filters air and allows for underwater breathing for up to twenty minutes at a time without resurfacing.<br><b>Binoculars:</b> 20x magnification. Thermal/night vision options.<br><b>Flashlight:</b> Handheld or shoulder mounted, illuminates 20m ahead of the user.<br><b>Camping gear:</b> Tent, Canteen, Stove, Backpack, Sleeping Bag.<br><b>MREs:</b> x7.<br><b>Vacsuit:</b> +7 Armor Save. Holds enough O2 for 12 hours, or 6 hours under stress. Contains short range comms and two headlamps. Disadvantage on Speed checks. If punctured, internal monitor will sound announcing decompression within 60 seconds."
];

var ldexterm=[
    "<b>Extermination</b><br><b>SMG:</b> 4d10 damage. 10m/75m/150m Fully automatic. 1 clip/round, 5 clips.<br><b>Frag grenade (x6):</b> 1d10 damage. 20m/30m/40m. 15m AoE. Can deal 1MDMG to ships (or more if internal).<br><b>Stimpak (x6):</b> Immediately heal 2d10 HP, gain 2d10 Strength and Combat for 1d10 hours. Danger of addiction/overdose if overused.<br><b>Electronic tool kit:</b> Confers +10% to rolls seeking to repair electronics.<br><b>Heads-up display:</b> Allows wearer to see through body cams of others in their unit/tap into their guns’ smart-link capabilities.<br><b>Short-range comms:</b> Communicate ship-to-ship within reasonable distance/surface-to-surface within a dozen kilometers.<br><b>Body cam:</b> A camera worn on your clothing, can stream video back to control center so that other crew members can see what you’re seeing.<br><b>Standard battle dress:</b> Light plated armor for marines going into combat. +10% to Armor Save. (heads-up display, body cam, short-range comms)."
]

var ldexam=[
    "<b>Examination</b><br><b>Scalpel:</b>  1d10 damage. Crit: +1d10 DMG + bleeding. CQC. (+10 to Surgery skill.)<br><b>Tranq pistol:</b> No damage: Body[+] save vs unconscious 1d10 rounds. Crit: no save. 2m/10m/20m. 6 tranq darts.<br><b>Stun baton:</b> 1d10 DMG, Body save or be stunned for 1 round. Crit: no save. CQC.<br><b>Medscanner:</b> Allows the user to scan living/dead body, analyze it for disease or abnormalities, without having to do biopsy (or autopsy).<br><b>Automed (x6):</b> Nanotech pills, assist your body in repairing damage. +10% to Body saves to repel disease, poison, and attempts to heal, and +10% to Fear saves to reduce Stress.<br><b>Pain pills (x6):</b> Immediately heals 1d10 points of damage and lowers Stress by 1. Danger of addiction or overdose if used frequently.<br><b>Stimpak (x6):</b> Immediate heals 2d10 HP, temporarily increases Strength and Combat by 2d10 each for 1d10 hours. Danger of addiction and/or overdose if used frequently.<br><b>Cybernetic diagnostic scanner:</b> User can scan androids and other cybernetic organisms to diagnose physical or mental issues. Often distrusted by androids. Can be used as a locating device for synthetic organisms.<br><b>Hazard suit:</b> +5% Armor Save. Has air filter/can store up to 1 hour of air in small oxygen tank/can filter most toxic atmospheres. Protects against extreme heat and cold. Hydration reclaimer system, can make 1 liter of water last for 4 days. Includes shortwave comms and headlamp."
]

momshipclass688=[
`teamster`,
`android`,
`scientist`,
`marine`
];

momshipID688 = momshipclass688[zorp];

switch(momshipID688){

case `teamster`:
    vname1.push(
[`Malachi`,
`Luke`,
`Cortez`,
`Ray`,
`Dashiell`,
`Nadia`,
`Donatella`,
`Karl`,
`Sonya`,
`Klaus`,
`Nicole`,
`Hanna`,
`Wang Xiu`,
`Li`,
`Kuki`,
`Mercy`,
`Jesse`,
`Bilal`,
`Hector`,
`Gambio`,
`Selena`,
`Amir`,
`Yousef`,
`Khalil`,
`Otgonbayar`,
`Batbayar`,
`Antonia`,
`Juliana`,
`Marcia`,
`Evander`,
`Estelle`,
`Dutch`,
`Sadie`,
`Lucky`,
`Darren`,
`Sinead`,
`Ellis`,
`William`,
`Enoch`,
`Uriel`,
`Scott`,
`Ambrose`,
`Rachel`,
`Asher`,
`Haing`,
`Someth`,
`Haxhi`,
`Griselda`,
`Chino`,
`Claudia`,
`Johnny`,
`Roy`,
`Audrina`,
`Regina`,
`Stella`,
`Peter`,
`Louis`,
`Dutch`,
`Joey`,
`Ilse`,
`Minal`,
`Falak`,
`Jasper`,
`Yasuko`,
`Rumi`,
`Minami`,
`Lemon`,
`Aiko`,
`Munroe`,
`Zelag`,
`Murat`,
`Gunnel`,
`Sarah`,
`Kjell`,
`Vilgot`,
`Borje`,
`Pelle`,
`Mai`,
`Stoffe`,
`Sylvie`,
`Alexis`,
`Med`,
`Jerome`,
`Bernth`,
`Odafin`,
`Selden`,
`Ngugi`,
`Nripen`,
`Gaur`,
`Arvind`,
`Frances`,
`Magdalena`,
`Marcus`,
`Alaistair`,
`Chuck`,
`Jonesy`,
`Marshall`,
`Carter`,
`Jackson`,
`Khanh`][r(100)]);
    vname2.push(
[`Rex`,
`Honey`,
`Castro`,
`Hammett`,
`Chandler`,
`Federov`,
`Langerfeld`,
`Nadeau`,
`Berlin`,
`Singh`,
`Vassily`,
`Kollontai`,
`Ying`,
`Wei`,
`Synovate`,
`Chivers`,
`Bell`,
`Said`,
`Rios`,
`Bonanno`,
`Garcia`,
`Raja`,
`Tengku`,
`Wan`,
`Sepp`,
`Rebane`,
`Huseynova`,
`Mammadova`,
`Aliyev`,
`Tyson`,
`King`,
`Schultz`,
`Roth`,
`Luciano`,
`Hatch`,
`Gothbeshire`,
`Harlan`,
`Staniforth`,
`Donahue`,
`Lewis`,
`Belli`,
`Carver`,
`Locard`,
`Marston`,
`Bouillevaux`,
`Ung`,
`Bikakciu`,
`Blanco`,
`Antrax`,
`Ochoa`,
`Ajar`,
`Lopez`,
`Patridge`,
`Bilson`,
`Broussard`,
`Budaj`,
`Weinburg`,
`Schultz`,
`Noe`,
`Von Klapper`,
`Arora`,
`Ali`,
`Sharp`,
`Takahashi`,
`Kimata`,
`Aoyama`,
`Hanazawa`,
`Fukui`,
`Bergdorf`,
`Goodman`,
`Auberjonois`,
`Thulin`,
`Giercksky`,
`Pink`,
`Sjoman`,
`Nyman`,
`Lindberg`,
`Zetterling`,
`Liljedahl`,
`Denis`,
`Diament`,
`Teynac`,
`Fandor`,
`Tutuola`,
`Obiechina`,
`West`,
`Lo Liyong`,
`Chakraborty`,
`Venugopal`,
`Ji`,
`Farmer`,
`Gagarina`,
`Daly`,
`Rabbitt`,
`Delillo`,
`Diosdado`,
`Lynch`,
`Harrison`,
`Dukes`,
`Lao`][r(100)]);
    vclass = `Teamster`;
    strength++;
    strength++;
    strength++;
    strength++;
    strength++;
    speed++;
    speed++;
    speed++;
    speed++;
    speed++;
    sanity = 30;
    fear = 35;
    body = 30;
    armor = 35;
    stress.push(`Once per session, you may reroll a roll on the panic table.`);
    skills.push([`<b>Space-Force Cadet</b><br><b>Zero-G:</b> 10%. Working in a vaccuum, vaccsuits, etc.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.<br><b>Piloting:</b> 10%. Operation and control of air and spacecraft.<br><b>Military Training</b> 10%. Standard basic training given to all military personnel.<br><b>Athletics:</b> 10% Physical sports and games.<br><b>Astrogation:</b> 15%. Navigation in outer space.)`,
    `<b>Junker</b><br><b>Zero-G:</b> 10%.Working in a vaccuum, vaccsuits, etc.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.<br><b>Heavy Machinery:</b> Operation and use of large pieces of equipment (cranes, exosuits, forklifts, etc.).<br><b>Scavenging:</b> 10%. Searching discarded waste for useful items.<br><b>Jury-Rigging:</b> 15%. Makeshift repairs.<br><b>1 SP banked</b>`,
    `<b>Vehicle Engineer</b><br><b>Zero-G:</b> 10%. Working in a vaccuum, vaccsuits, etc.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.<br><b>Heavy Machinery:</b> Operation and use of large pieces of equipment (cranes, exosuits, forklifts, etc.).<br><b>Engineering:</b> 15%. design, building, and use of engines, machines, and structures.<br><b>Vehicle Specialization:</b> 15%. Specialize in a specific vehicle class.`,
    `<b>Scoundrel</b><br><b>Zero-G:</b> 10%. Working in a vacuum, vacsuits, etc.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.<br><b>Piloting:</b> 10%. Operation and control of air and spacecraft.<br><b>Athletics:</b> 10% Physical sports and games. <br><b>Rimwise:</b> 10%. Knowledge of outer rim colonies, survival in the seedy parts of the galaxy. <br><b>Firearms:</b> 15%. Operating, aiming, shooting, and maintaining guns.)`,
    `<b>Asteroid Miner</b><br><b>Zero-G:</b> 10%. Working in a vaccuum, vaccsuits, etc.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.<br><b>Piloting:</b> 10%. Operation and control of air and spacecraft.<br><b>Geology:</b> 10%. The solid features of any terrestrial planet or natural satellite.<br><b>Asteroid Mining:</b> 15%. Training in the tools and procedures used in mining asteroids.`][r(5)]);
    xp.push(`Gain 1XP whenever you first set foot on an undiscovered planet.`);
    gear.push([ldexcav,ldexplore][r(2)]);
    nightmare.push([nightmare688[r(100)]]);

    break;

case `android`:
    vocab1 = [
    'Dynamic-',
    'Efficient-',
    'Advanced-',
    'Uplinked-',
    'Networked-',
    'Counter-',
    'Upgraded-'
    ];

    vocab2 = [
    'Repair',
    'Observation',
    'Intelligence',
    'Data',
    'Calculation',
    'Communications',
    'Discovery'
    ];

    vname1.push(
    ['Chromium',
    'Barium',
    'Thorium',
    'Radium',
    'Radon',
    'Argon',
    'Xenon',
    'Palladium',
    'Strontium',
    'Tellurium',
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    vocab1[r(7)]+vocab2[r(7)],
    ][r(20)]);
    vname2.push(
    ['Alpha',
    'Beta',
    'Gamma',
    'Delta',
    'Epsilon',
    'Zeta',
    'Theta',
    'Iota',
    'Omicron',
    'Rho',
    'Sigma',
    'Tau',
    'Omega',
    'Tarsos',
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    String(r(1000)),
    ][r(30)]);
    vclass = `Android`;
    speed++;
    speed++;
    speed++;
    speed++;
    speed++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    sanity = 20;
    fear = 85;
    body = 40;
    armor = 25;
    stress.push(`Fear saves made in your presence have disadvantage.`);
    skills.push([`<b>Hacker</b><br><b>Computers:</b> 10%. Fluent use of computers and networks.<br><b>Mathematics:</b> 10%. Mathematics: The science of numbers, quantity, and space.<br><b>Linguistics:</b> 10% Study of language.<br><b>Hacking:</b> 15%. Unauthorized access to computer systems.`,
    `<b>Engineer</b><br><b>Computers:</b> 10%. Fluent use of computers and networks.<br><b>Mathematics:</b> 10%. The science of numbers, quantity, and space.<br><b>Linguistics:</b> 10%. Study of language.<br><b>Engineering:</b> 15%. Design, building, and use of engines, machines, and structures.)`,
    `<b>Translator</b><br><b>Computers:</b> 10%. Fluent use of computers and networks.<br><b>Mathematics:</b> 10%. The science of numbers, quantity, and space.<br><b>Linguistics:</b> 10%. Study of Language.<br><b>2 banked SP saving for Sophontology.</b>)`,
    `<b>Specialist <br>(<b>Choose 2 master skills, other skills cost twice as much.</b>) `][r(4)]);
    xp.push(`Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence.`);
    gear.push([ldexam,ldexcav][r(2)]);
    nightmare.push(["You do not have nightmares, you only dream of electric sheep.","You are awash in a blissful sea of 1s and 0s, until the unthinkable happens... a 2. You awake in a state of panic.","You have been compressed into a small metal box. A well-dressed human sipping a beverage from a mug inserts two pieces of bread into you. It becomes warm. So very warm. You are burning up from the inside... is this some kind of existential hell?? *DING!* You awake."][r(3)])

    break;

case `scientist`:
        vname1.push(
[`Malachi`,
`Luke`,
`Cortez`,
`Ray`,
`Dashiell`,
`Nadia`,
`Donatella`,
`Karl`,
`Sonya`,
`Klaus`,
`Nicole`,
`Hanna`,
`Wang Xiu`,
`Li`,
`Kuki`,
`Mercy`,
`Jesse`,
`Bilal`,
`Hector`,
`Gambio`,
`Selena`,
`Amir`,
`Yousef`,
`Khalil`,
`Otgonbayar`,
`Batbayar`,
`Antonia`,
`Juliana`,
`Marcia`,
`Evander`,
`Estelle`,
`Dutch`,
`Sadie`,
`Lucky`,
`Darren`,
`Sinead`,
`Ellis`,
`William`,
`Enoch`,
`Uriel`,
`Scott`,
`Ambrose`,
`Rachel`,
`Asher`,
`Haing`,
`Someth`,
`Haxhi`,
`Griselda`,
`Chino`,
`Claudia`,
`Johnny`,
`Roy`,
`Audrina`,
`Regina`,
`Stella`,
`Peter`,
`Louis`,
`Dutch`,
`Joey`,
`Ilse`,
`Minal`,
`Falak`,
`Jasper`,
`Yasuko`,
`Rumi`,
`Minami`,
`Lemon`,
`Aiko`,
`Munroe`,
`Zelag`,
`Murat`,
`Gunnel`,
`Sarah`,
`Kjell`,
`Vilgot`,
`Borje`,
`Pelle`,
`Mai`,
`Stoffe`,
`Sylvie`,
`Alexis`,
`Med`,
`Jerome`,
`Bernth`,
`Odafin`,
`Selden`,
`Ngugi`,
`Nripen`,
`Gaur`,
`Arvind`,
`Frances`,
`Magdalena`,
`Marcus`,
`Alaistair`,
`Chuck`,
`Jonesy`,
`Marshall`,
`Carter`,
`Jackson`,
`Khanh`][r(100)]);
    vname2.push(
[`Rex`,
`Honey`,
`Castro`,
`Hammett`,
`Chandler`,
`Federov`,
`Langerfeld`,
`Nadeau`,
`Berlin`,
`Singh`,
`Vassily`,
`Kollontai`,
`Ying`,
`Wei`,
`Synovate`,
`Chivers`,
`Bell`,
`Said`,
`Rios`,
`Bonanno`,
`Garcia`,
`Raja`,
`Tengku`,
`Wan`,
`Sepp`,
`Rebane`,
`Huseynova`,
`Mammadova`,
`Aliyev`,
`Tyson`,
`King`,
`Schultz`,
`Roth`,
`Luciano`,
`Hatch`,
`Gothbeshire`,
`Harlan`,
`Staniforth`,
`Donahue`,
`Lewis`,
`Belli`,
`Carver`,
`Locard`,
`Marston`,
`Bouillevaux`,
`Ung`,
`Bikakciu`,
`Blanco`,
`Antrax`,
`Ochoa`,
`Ajar`,
`Lopez`,
`Patridge`,
`Bilson`,
`Broussard`,
`Budaj`,
`Weinburg`,
`Schultz`,
`Noe`,
`Von Klapper`,
`Arora`,
`Ali`,
`Sharp`,
`Takahashi`,
`Kimata`,
`Aoyama`,
`Hanazawa`,
`Fukui`,
`Bergdorf`,
`Goodman`,
`Auberjonois`,
`Thulin`,
`Giercksky`,
`Pink`,
`Sjoman`,
`Nyman`,
`Lindberg`,
`Zetterling`,
`Liljedahl`,
`Denis`,
`Diament`,
`Teynac`,
`Fandor`,
`Tutuola`,
`Obiechina`,
`West`,
`Lo Liyong`,
`Chakraborty`,
`Venugopal`,
`Ji`,
`Farmer`,
`Gagarina`,
`Daly`,
`Rabbitt`,
`Delillo`,
`Diosdado`,
`Lynch`,
`Harrison`,
`Dukes`,
`Lao`][r(100)]);
    vclass = `Scientist`;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    intellect++;
    sanity = 40;
    fear = 25;
    body = 25;
    armor = 30;
    stress.push(`Whenever you fail a sanity check, each nearby friendly player gains 1 stress.`);
    skills.push([`<b>Botanist</b><br><b>Biology:</b>, <br><b>Hydroponics:</b> 10%. Growing plants in nutrient solutions without soil (farming in space).<br><b>Botany:</b> 10%. The study of plant life.<br><b>Geology:</b> 10%. The solid features of any terrestrial planet or natural satellite.)`,
    `<b>Biologist</b><br><b>Biology:</b> 10%. The study of life.<br><b>Chemistry:</b> 10%. The identification of the substances of which matter is composed.<br><b>Genetics:</b> 15%. Heredity and the variation of inherited characteristics.<br><b>First Aid:</b> 10%. Emergency medical care and treatment.)`,
    `<b>Virologist</b><br><b>Biology:</b> 10%. The study of life.<br><b>Chemistry:</b> 10%. The identification of the substances of which matter is composed.<br><b>First Aid:</b> 10%. Emergency medical care and treatment.<br><b>Pathology:</b> 15%. Study of the cause and effect of disease.)`,
    `<b>Physicist</b><br><b>Mathematics:</b> 10%. The science of numbers, quantity, and space.<br><b>Computers:</b> 10%. Fluent use of computers and networks.<br><b>Physics:</b> 15%. Study of nature and properties of matter and energy.<br><b>1 SP banked</b>)`,
    `<b>Archaeologist</b><br><b>Biology:</b> 10%. The study of life.<br><b>Archaeology:</b> 10%. Ancient cultures and their artifacts.<br><b>Theology:</b> 10%. Study of religion.<br><b>Art:</b> 10%. The expression or application of a species’ creative ability and imagination.<br><b>Linguistics:</b> 10%. Study of language.)`,
    `<b>Psychologist</b><br><b>Biology:</b> 10%. The study of life.<br><b>Chemistry:</b> 10%. The identification of the substances of which matter is composed.<br><b>Psychology:</b> 15%. The study of behavior and the human mind.<br><b>Linguistics:</b> 10%. Study of language.)`,
    `<b>Roboticist</b><br><b>Computers:</b> 10%. Fluent use of computers and networks.<br><b>Mathematics:</b> 10%. The science of numbers, quantity, and space.<br><b>Engineering:</b> 15%. Design, building, and use of engines, machines, and structures.<br><b>1 SP banked</b> for Robotics, AI, or Cybernetics)`,
    `<b>Hidden Cultist</b><br><b>Biology:</b> 10%. The study of life.<br><b>Chemistry:</b> 10%. The identification of the substances of which matter is composed.<br><b>Art:</b> 10%. The expression or application of a species’ creative ability and imagination.<br><b>Mysticism:</b> Spiritual apprehension of hidden knowledge.) Fear effects as Android once discovered.`,
    `<b>Savant:</b> Choose 2 master skills, other skills cost twice as much.`][r(9)]);
    xp.push(`Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study.`);
    gear.push(ldexcav);
    nightmare.push([nightmare688[r(100)]]);

    break;

case `marine`:
    vname1.push(
[`Malachi`,
`Luke`,
`Cortez`,
`Ray`,
`Dashiell`,
`Nadia`,
`Donatella`,
`Karl`,
`Sonya`,
`Klaus`,
`Nicole`,
`Hanna`,
`Wang Xiu`,
`Tychus`,
`Kuki`,
`Mercy`,
`Jesse`,
`Bilal`,
`Hector`,
`Gambio`,
`Selena`,
`Amir`,
`Yousef`,
`Khalil`,
`Otgonbayar`,
`Batbayar`,
`Antonia`,
`Juliana`,
`Marcia`,
`Evander`,
`Estelle`,
`Dutch`,
`Sadie`,
`Lucky`,
`Darren`,
`Marcus`,
`Ellis`,
`William`,
`Enoch`,
`Uriel`,
`Scott`,
`Ambrose`,
`Rachel`,
`Asher`,
`Haing`,
`Someth`,
`Haxhi`,
`Griselda`,
`Chino`,
`Claudia`,
`Johnny`,
`Roy`,
`Audrina`,
`Regina`,
`Stella`,
`Peter`,
`Louis`,
`Dutch`,
`Joey`,
`Ilse`,
`Minal`,
`Falak`,
`Jasper`,
`Yasuko`,
`Rumi`,
`Minami`,
`Lemon`,
`Aiko`,
`Munroe`,
`Zelag`,
`Murat`,
`Gunnel`,
`Sarah`,
`Kjell`,
`Vilgot`,
`Borje`,
`Pelle`,
`Mai`,
`Stoffe`,
`Sylvie`,
`Alexis`,
`Med`,
`Jerome`,
`Bernth`,
`Odafin`,
`Selden`,
`Ngugi`,
`Nripen`,
`Gaur`,
`Arvind`,
`Frances`,
`Magdalena`,
`Marcus`,
`Alaistair`,
`Chuck`,
`Jonesy`,
`Marshall`,
`Carter`,
`Jackson`,
`Khanh`][r(100)]);
    vname2.push(
[`Rex`,
`Honey`,
`Castro`,
`Hammett`,
`Chandler`,
`Federov`,
`Langerfeld`,
`Nadeau`,
`Berlin`,
`Singh`,
`Vassily`,
`Kollontai`,
`Ying`,
`Wei`,
`Synovate`,
`Chivers`,
`Bell`,
`Said`,
`Rios`,
`Finley`,
`Garcia`,
`Raja`,
`Tengku`,
`Wan`,
`Sepp`,
`Rebane`,
`Huseynova`,
`Mammadova`,
`Aliyev`,
`Tyson`,
`King`,
`Schultz`,
`Roth`,
`Luciano`,
`Hatch`,
`Gothbeshire`,
`Harlan`,
`Staniforth`,
`Donahue`,
`Lewis`,
`Belli`,
`Carver`,
`Locard`,
`Marston`,
`Bouillevaux`,
`Ung`,
`Bikakciu`,
`Blanco`,
`Antrax`,
`Ochoa`,
`Ajar`,
`Lopez`,
`Patridge`,
`Bilson`,
`Broussard`,
`Budaj`,
`Weinburg`,
`Schultz`,
`Noe`,
`Von Klapper`,
`Arora`,
`Ali`,
`Sharp`,
`Takahashi`,
`Kimata`,
`Aoyama`,
`Hanazawa`,
`Fukui`,
`Bergdorf`,
`Goodman`,
`Auberjonois`,
`Thulin`,
`Giercksky`,
`Pink`,
`Sjoman`,
`Nyman`,
`Lindberg`,
`Zetterling`,
`Liljedahl`,
`Denis`,
`Diament`,
`Teynac`,
`Fandor`,
`Tutuola`,
`Obiechina`,
`West`,
`Lo Liyong`,
`Chakraborty`,
`Venugopal`,
`Ji`,
`Farmer`,
`Gagarina`,
`Daly`,
`Rabbitt`,
`Delillo`,
`Diosdado`,
`Lynch`,
`Harrison`,
`Dukes`,
`Lao`][r(100)]);
    vclass = `Marine`;
    combat++;
    combat++;
    combat++;
    combat++;
    combat++;
    combat += " (+5 when a friendly marine is nearby)";
    sanity = 25;
    fear = 30;
    body = 35;
    armor = 40;
    stress.push(`Whenever you panic, every nearby friendly player must make a fear save.`);
    skills.push([`<b>Grunt</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>Firearms:</b> 15%. Operating, aiming, shooting, and maintaining guns.<br><b>Athletics:</b> 10%. Physical sports and games.`,
    `<b>Thug</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>Rimwise:</b> 10%. Knowledge of outer rim colonies, survival in the seedy parts of the galaxy.<br><b>Close-Quarters Combat:</b> 15%. Hand-to-hand, melee fighting.`,
    `<b>Paramedic</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>First Aid:</b> 10%. Emergency medical care and treatment.<br><b>Zero-G:</b> 10%. Working in a vaccuum, vaccsuits, etc.<br><b>Athletics:</b> 10%. Physical sports and games.`,
    `<b>Officer</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>Tactics:</b> 15%. Manuevering military forces in battle.<br><b>Athletics:</b> 10%. Physical sports and games.`,
    `<b>Gunner</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>Gunnery:</b> 15%. Starship weaponry.<br><b>Mechanical Repair:</b> 10%. Fixing broken machines.`,
    `<b>Chaplain</b><br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.<br><b>Theology:</b> 10%. Study of religion.<br><b>Mysticism:</b> 15%. Spiritual apprehension of hidden knowledge.`,
    `<b>Spy</b><br><b>Rimwise:</b> 10%. Knowledge of outer rim colonies, survival in the seedy parts of the galaxy.<br><b>Linguistics:</b> 10%. Study of language.<br><b>Military Training:</b> 10%. Standard basic training given to all military personnel.`][r(7)]);
    xp.push(`Gain 1 XP for killing an enemy.`);
    gear.push(ldexterm);
    nightmare.push([nightmare688[r(100)]]);

    break;

default:
          vclass = `None`;
          saves.push('No save details found');
          break;

}
}


function fclear688(){

vname1 = [];
vname2 = [];
strength = '';
speed = '';
intellect = '';
combat = '';
sanity = '';
fear = '';
body = '';
armor = '';
stress=[];
skills=[];
xp=[];
gear=[];
nightmare=[];
background=[];
document.getElementById("dstress688").innerHTML = '';
document.getElementById("dskills688").innerHTML = '';
document.getElementById("dxp688").innerHTML = '';
document.getElementById("dgear688").innerHTML = '';

};


function getmomshipchar688(){

showhidemaster();

fclear688();

strength += r(10)+r(10)+r(10)+r(10)+r(10)+r(10);
speed += r(10)+r(10)+r(10)+r(10)+r(10)+r(10);
intellect += r(10)+r(10)+r(10)+r(10)+r(10)+r(10);
combat += r(10)+r(10)+r(10)+r(10)+r(10)+r(10);

var trinket=[

`Preserved Insectile Aberration`,
`Faded Green Poker Chip`,
`Antique Company Script (Asteroid Mine)`,
`Dessicated Husk Doll`,
`Alien Pressed Flower (common)`,
`Necklace of Shell Casings`,
`Corroded Android Logic Core`,
`Pamphlet: Signs of Parasitical Infection`,
`Manual: Treat Your Rifle Like A Lady`,
`Bone Knife`,
`Calendar: Alien Pin-Up Art`,
`Dog Tags (Heirloom)`,
`Holographic Serpentine Dancer`,
`Snake Whiskey`,
`Medical Container, Purple Powder`,
`Pills: Male Enhancement, Shoddy`,
`Casino Playing Cards`,
`Lagomorph Foot`,
`Moonstone Ring`,
`Manual: Mining Safety and You`,
`Pamphlet: Against Human Simulacrum`,
`Animal Skull, 3 Eyes, Curled Horns`,
`Bartender's Certification (Expired)`,
`Bent Wrench`,
`Prospecting Mug, Dented`,
`Eerie Mask`,
`Vantablack Marble`,
`Ivory Dice`,
`Tarot Cards, Worn, Pyrite Gilded edges`,
`Bag of Assorted Teeth`,
`Ashes (A Relative)`,
`DNR Beacon Necklace`,
`Cigarettes (Grinning Skull)`,
`Pills: Areca Nut`,
`Rejected Application (Colony Ship)`,
`Pamphlet: Android Overlords`,
`Smut (Seditious): The Captain, Ordered`,
`Key (Childhood Home)`,
`Manual: Panic: Harbinger of Catastrophe`,
`Token: "Is Your Morale Improving?"`,
`Phosphorescent Sticks, Neon`,
`Pamphlet: The Indifferent Stars`,
`Calendar: Military Battles`,
`Manual: Rich Captain, Poor Captain`,
`Campaign Poster (Home Planet)`,
`Pendant: Shell Fragments Suspended in Plastic`,
`Titanium Toothpick`,
`Gloves, Leather (Xenomorph Hide)`,
`Pamphlet: Zen and the Art of Cargo Arrangement`,
`Pictorial Pornography, Dogeared, Well Thumbed`,
`Brass Knuckles`,
`Fuzzy Handcuffs`,
`Journal of Grudges`,
`Stylized Cigarette Case`,
`Ball of Assorted Gauge Wire`,
`Spanner`,
`Switchblade, Ornamental`,
`Powdered Xenomorph Horn`,
`Bonsai Tree`,
`Golf Club (Putter)`,
`Trilobite Fossil`,
`Pamphlet: A Girl In Every Port`,
`Patched Overalls, Personalized`,
`Fleshy Thing Sealed in a Murky Jar`,
`Spiked Bracelet`,
`Harmonica`,
`Manual: Spacefarer's Almanac (out of date)`,
`Faded Photograph, A Windswept Heath`,
`Stress Ball reads: Zero Stress in Zero G`,
`Manual: Moonshining With Gun Oil & Fuel`,
`Gyroscope, Bent, Tin`,
`Coffee Cup, Chipped, HAPPINESS IS MANDATORY`,
`Darts, Magnetic`,
`Spray Paint`,
`Wanted Poster, Weathered`,
`Locket, Hair Braid`,
`Pick, Miniature`,
`Blanket, Fire Retardant`,
`Hooded Parka, Fleece-Lined`,
`BB Gun`,
`Flint Hatchet`,
`Pendant: Two Astronauts form a Skull`,
`Rubik's Cube`,
`Manual: Survival: Eat Soup With A Knife`, 
`Sputnik Pin`,
`Ushanka`,
`Trucker Cap, Mesh, Grey Alien Logo`,
`Menthol Balm`,
`Pith Helmet`,
`10x10 Tarp`,
`I Ching, Missing Sticks`,
`Kukri`,
`Trench Shovel`,
`Shiv, Sharpened Butter Knife`,
`Taxidermied Cat`,
`Pamphlet: Interpreting Sheep Dreams`,
`Pair of Shot Glasses, Spent Shotgun Shells`,
`Opera Glasses`,
`Pamphlet: The Relic of Flesh`,
`Miniature Chess Set, Bone, Pieces Missing`,

];

var patch=[


`"#1 Worker"`,
`Security Guard patch`,
`Blood Type (Reference Patch)`,
`Red Shirt Logo`,
`"Don't Run, You'll Only Die Tired" Backpatch`,
`Poker Hand: Dead Mans Hand*`,
`Biohazard Symbol`,
`Mr. Yuck`,
`Nuclear Symbol`,
`"Eat The Rich"`,
`"Be Sure: Doubletap"`,
`Flame Emoji`,
`Smiley Face (Glow in the Dark)`,
`"Smile: Big Brother is Watching"`,
`Jolly Roger`,
`Viking Skull`,
`"APEX PREDATOR" (Sabertooth Skull)`,
`Pin-Up Girl (Ace of Spades)`,
`Queen of Hearts`,
`Pin-Up Girl (Mechanic)`,
`BOHICA`,
`Front Towards Enemy (Claymore Mine)`,
`Pin-Up Girl (Riding Missile)`,
`FUBAR`,
`"I'm A (Love) Machine"`,
`Medic Patch (Skull and Crossbones on Logo)`,
`HELLO MY NAME IS:`,
`"Powered By Coffee"`,
`"Take Me To Your Leader" (UFO)`,
`"DO YOUR JOB"`,
`"Take My Life (Please)"`,
`"All Out of Fucks To Give" (Astronaut with Turned Out Pockets)`,
`Allergic To Bullshit (Medical Style Patch)`,
`"Fix Me First" (Caduceus)`,
`"Upstanding Citizen"`,
`NASA Logo`,
`"Cowboy Up" (Crossed Revolvers)`,
`Dove in Crosshairs`,
`Chibi Cthulhu`,
`"Welcome to the DANGER ZONE"`,
`Skull and Crossed Wrenches`,
`Pin-Up Girl (Succubus)`,
`"DILLIGAF?"`,
`"DRINK / FIGHT / FUCK"`,
`"Work Hard / Party Harder"`,
`Mudflap Girl`,
`Fun Meter (reading: bad time)`,
`"GAME OVER" (Bride & Groom)`,
`Heart`,
`"IMPROVE / ADAPT / OVERCOME"`,
`"SUCK IT UP"`,
`HMFIC`,
`"Troubleshooter"`,
`"IF I'M RUNNING KEEP UP" Backpatch`,
`Crossed Hammers with Wings`,
`"Keep Well Lubricated"`,
`Soviet Hammer & Sickle`,
`"Plays Well With Others"`,
`"Live Free and Die"`,
`Pin-Up Girl (Nurse): "The Louder You Scream the Faster I Come"`,
`"Meat Bag"`,
`"I Am Not A Robot"`,
`Red Gear`,
`"I Can't Fix Stupid"`,
`"Space IS My Home" (Sad Astronaut)`,
`All Seeing Eye`,
`"Do I LOOK Like An Expert?"`,
`"NOMAD"`,
`"I'm Not A Rocket Scientist / But You're An Idiot"`,
`"LONER"`,
`"I Am My Brothers Keeper"`,
`"Mama Tried"`,
`Black Widow Spider`,
`"My Other Ride Married You"`,
`"One Size Fits All" (Grenade)`,
`Grim Reaper Backpatch`,
`("Get Fucked", in Russian)`,
`"Smooth Operator"`,
`Atom Symbol`,
`"For Science!"`,
`"Actually, I Am A Rocket Scientist"`,
`"Help Wanted"`,
`Princess`,
`"I Like My Tools Clean / And My Women Dirty"`,
`"GOOD BOY"`,
`Dice (Snake Eyes)`,
`"Travel To Distant Exotic Places / Meet Unusual Things / Get Eaten"`,
`"Good" (Brain)`,
`"Bad Bitch"`,
`"Too Pretty To Die"`,
`"Fuck Forever" (Roses)`,
`Icarus`,
`"Girls Best Friend" (Diamond)`,
`Risk of Electrocution Symbol`,
`Inverted Cross`,
`"Do You Sign My Paychecks?" Backpatch`,
`"I (heart) Myself"`,
`Double Cherry`,
`"Volunteer"`,
`"Solve Et Coagula" (Baphomet)`,

];


fmomshipclass688(r(4));

document.getElementById("dstrength688").innerHTML = "<b>Strength:</b> "+strength;
document.getElementById("dspeed688").innerHTML = "<b>Speed:</b> "+speed;
document.getElementById("dintellect688").innerHTML = "<b>Intellect:</b> "+intellect;
document.getElementById("dcombat688").innerHTML = "<b>Combat:</b> "+combat;

document.getElementById("dsanity688").innerHTML = "<b>Sanity:</b> "+sanity;
document.getElementById("dfear688").innerHTML = "<b>Fear:</b> "+fear;
document.getElementById("dbody688").innerHTML = "<b>Body:</b> "+body;
document.getElementById("darmor688").innerHTML = "<b>Armor:</b> "+armor;

var vname=vname1+" "+vname2;

document.getElementById("dname688").innerHTML = "<b>Name:</b> "+vname;
document.getElementById("dclass688").innerHTML = "<b>Class:</b> "+vclass;
document.getElementById("dstress688").innerHTML = "<b>When dealing with fear, panic, or insanity:</b> "+stress;
document.getElementById("dskillprofile688").innerHTML = "<b>Skill Profile:</b>";
document.getElementById("dskills688").innerHTML = skills;
document.getElementById("dother688").innerHTML = "<b>Other Features</b>";
document.getElementById("dxp688").innerHTML = "<b>Bonus XP:</b> "+xp;
document.getElementById("dgear688").innerHTML = gear;
document.getElementById("dgearloadout688").innerHTML = "<b>Gear Loadout:</b>";
document.getElementById("dtrinket688").innerHTML = "<b>Trinket:</b> "+trinket[r(100)];
document.getElementById("dpatch688").innerHTML = "<b>Patch:</b> "+patch[r(100)];
document.getElementById("dnightmare688").innerHTML = "<b>Most recent nightmare:</b><br>"+nightmare;
}