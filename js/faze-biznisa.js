(function(){
/* ================= CONFIG ================= */
const CONFIG = {
  // Pun link koraka 1 (upitnik). Koristi se na thank you stranici ako rezultat nije pronađen.
  QUIZ_URL: "https://stefanstojkovic.rs/faze-biznisa",
  // Link za razgovor (kalendar). Prazno = dugme se ne prikazuje.
  CTA_URL: "https://api.leadconnectorhq.com/widget/bookings/stefans2",
  // GHL forma "FSF upitnik" (ID iz embed koda) i njena visina u pikselima
  FORM_ID: "mcOLgx6BLRVYYSjS3Xxk",
  FORM_HEIGHT: 757,
  // Glavni video na thank you stranici. Prazno = prvi video za fazu. Upiši YouTube ID ako svima želiš da pokažeš isti video (npr. tvoj novi snimak).
  MAIN_VIDEO_ID: "",
  // Glavni video sa sajta (mp4). Ako je upisan, ima prednost nad YouTube videom.
  MAIN_VIDEO_MP4: "video/faze-plan.mp4?v=2",
  MAIN_VIDEO_POSTER: "video/faze-plan.jpg?v=2",
  // Poziv na thank you stranici zavisi od toga da li radi sam ili ima tim. Isti link za oba programa.
  PROGRAMS: {
    solo: { name: "Mentorski program za solo preduzetnike",
      cta: "Proveri da li si fit za Mentorski program za solo preduzetnike",
      who: "Za one koji rade sami ili uz par saradnika",
      points: ["Mala grupa, do 5 vlasnika", "4 meseca rada na tvom ličnom sistemu i sistemu biznisa",
               "Svake nedelje jedan korak, koji sprovodiš do sledećeg susreta", "Podrška u chatu između susreta"] },
    team: { name: "Mentorski program za vlasnike biznisa",
      cta: "Proveri da li si fit za Mentorski program za vlasnike biznisa",
      who: "Za vlasnike koji imaju tim",
      points: ["Rad 1 na 1 sa tobom i tvojim timom", "Počinjemo mapiranjem: jedno ograničenje koje najviše koči firmu",
               "Najviše 3 akcije istovremeno, uz nedeljni pregled", "Podrška u chatu između sesija, odgovor u roku od 24 sata"] }
  },
  // Sporedni izlaz za one koji još nisu spremni za razgovor
  ALT_URL: "https://www.youtube.com/@biz.systems",
  ALT_TEXT: "Ne hvala, sačekaću plan i gledaću besplatne videe",
  // Van ciljne grupe (Iskra i Dokaz): ne dobijaju mejl, plan preuzimaju na thank you stranici.
  // Upiši linkove PDF-ova posle učitavanja u GHL Media Storage.
  // Dokazi na thank you stranici (ciljna grupa). Sekcija se prikazuje samo kad ima sadržaja.
  CASE_STUDY_ID: "2u4nUdi3X9s",
  // Kratki primeri iz prakse (uspravni YouTube Shorts), ispod studije slučaja
  PRACTICE_VIDEOS: [
    { video: "XOhoWJECZG8", phases: [2,3,4], person: "Dušan", title: "Glasovna poruka od Dušana iz Floumate-a: isti tim, 2 nova klijenta, bez novog zaposlenog." },
    { video: "hipAtIp88KQ", phases: [3,4], person: "Dušan", title: "Da li zaista moraš da zaposliš novog čoveka? Šta smo uradili sa Dušanom umesto zapošljavanja." }
  ],   // studija slučaja ispod "Rezultati iz prakse" (ne prikazuje se ako je već glavni video)
  // Video testimonijali: YouTube ID (video) ili link na mp4 iz GHL Media (mp4). vertical: true za uspravne (Shorts).
  // phases: u kojim fazama se prikazuje (2 Ritam, 3 Rasterećenje, 4 Fokus, 5 Dubina, 6 Protok). Najviše 3 po fazi, redom iz liste.
  // segs (nije obavezno): samo za te veličine ("solo", "small", "large").
  TESTIMONIAL_ORDER: { 2: ["9LqBHO4FhEY","t7cQJY0oGeY","rwzQXlHFc94","_EQsmcfqZR8"], 3: ["9LqBHO4FhEY","rwzQXlHFc94","_EQsmcfqZR8","t7cQJY0oGeY"],
                      4: ["_EQsmcfqZR8","9LqBHO4FhEY","t7cQJY0oGeY","rwzQXlHFc94"], 5: ["3pU3IgvwWog","_EQsmcfqZR8","42xy237llZ0"],
                      6: ["3pU3IgvwWog","42xy237llZ0","rwzQXlHFc94"] },
  TESTIMONIALS: [
    { video: "9LqBHO4FhEY", phases: [2,3,4], segs: ["solo"], vertical: true, name: "Zerina Zinger", role: "Edukatorka za sisteme u dizajnu enterijera, radi sama",
      quote: "Kombinuješ najbolje od oba sveta: AI i ljudski faktor." },
    { video: "_EQsmcfqZR8", phases: [2,3,4,5], vertical: true, name: "Dušan", role: "Vlasnik agencije, Floumate",
      quote: "Matematika koja kaže kako se saradnja isplati." },
    { video: "rwzQXlHFc94", phases: [2,3,4,5,6], vertical: true, name: "Patrick Burns", role: "Osnivač, Patrick Burns Co.",
      quote: "Sistem koji oslobađa vlasnika biznisa." },
    { video: "t7cQJY0oGeY", phases: [2,3,4], vertical: true, name: "Aleksandar Vasić", role: "Otvori LLC",
      quote: "Svakom biznisu je potreban neko ko će sa ptičije perspektive, objektivno, pogledati čitav proces." },
    { video: "3pU3IgvwWog", phases: [5,6], vertical: true, name: "Tahir Slezović", role: "Tehnički direktor, dva Tetris projekta",
      quote: "Tim je postao stabilniji i, najbitnije, siguran u to što radi." },
    { video: "42xy237llZ0", phases: [5,6], vertical: true, name: "Član tima", role: "Šta dobijaju ljudi u timu (na engleskom)",
      quote: "What benefits do team members gain from working with Stefan?" }
  ],
  // Fotografije (GHL Media). Prazno = ne prikazuje se.
  PHOTOS: {
    bridge:   "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6a749b148684435c587dd1d1.jpg",  // mapiranje sa timom za stolom: "Od plana do sprovođenja"
    workshop: "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6ab2562e4091fa65e6cbd65f.png",  // stablo ciljeva na prozoru: "Kako izgleda sledeći korak"
    tetris:   "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/67a937fa232902355f41d44a.jpeg", // Tetris tim: rezultati, samo Dubina i Protok
    about:    "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6a749b14f4dee0f60f1b4522.jpg",  // predavanje na konferenciji: "Ko sam ja"
    cta:      "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6a749b148831c8ecc570fb09.jpg"   // flipčart: završni poziv
  },
  // "Ko sam ja": kratak video o tebi (YouTube ID, uspravan) i tekst
  ABOUT_VIDEO: "yL1qjsw6-k4",
  ABOUT_TEXT: [
    "Pomažem vlasnicima biznisa i liderima timova da izađu iz operative, tako što gradimo sisteme koji rade i bez njihovog stalnog prisustva.",
    "Radim sa ljudima koji su umorni od gašenja požara i žele da njihov tim sam donosi odluke, rešava probleme i isporučuje rezultate.",
    "Više od 10 godina uvodim promene i sisteme koji zažive u praksi, u timovima u 4 zemlje.",
    "Radio sam sa vlasnicima agencija od nekoliko ljudi, sa malim firmama i sa timovima u velikim kompanijama, kao što je Tetris tim u playStudios-u. Problem je skoro uvek isti: previše toga prolazi preko jedne osobe.",
    "Ne donosim još jednu prezentaciju. Zajedno nađemo jednu stvar koja najviše koči firmu, uvedemo nekoliko jednostavnih pravila i alata i svake nedelje gledamo brojke, dok promena ne postane navika tima."
  ],
  // Kratke činjenice ispod teksta (brojka + opis)
  ABOUT_FACTS: [
    ["30+", "timova sa kojima sam radio"],
    ["4", "zemlje"],
    ["10+", "godina rada sa timovima"],
    ["34 dana", "ranija isporuka, Tetris tim"]
  ],
  // Pisane preporuke (sa system.futurist.coach). Ne prikazuju se za osobu koja već ima video u toj fazi. Najviše 3.
  QUOTES: [
    { phases: [2,3,4,5,6], name: "Patrick Burns", role: "Osnivač, Patrick Burns Co.", text: "Stefan je bio apsolutno ključan za izgradnju skalabilne infrastrukture u našoj agenciji. On donosi jasnoću, strukturu i disciplinu u složene sisteme, i bez njegovog vođstva u operacijama ne bismo mogli da rastemo do nivoa kojem težimo." },
    { phases: [5,6], name: "Tahir Slezović", role: "Tehnički direktor i konsultant, playStudios", text: "Uvek dolazi sa novim idejama, kako da pojednostavimo procese i poboljšamo našu isporuku. Lično sam mnogo naučio od njega, verujem i ceo Tetris tim takođe." },
    { phases: [4,5,6], name: "Stefan Novaković", role: "Šef zaštite od požara i eksplozija, Asip Prevent", text: "Dobio sam konkretne alate koje mogu koristiti u praksi i nekoliko pravih „aha“ momenata. Shvatio sam da problem često nisu ljudi, već neusklađeni ciljevi koji vuku timove u različitim pravcima." },
    { phases: [5,6], name: "Marija Marković", role: "Specijalista za obuku i razvoj, Gomex", text: "Njegova profesionalnost, stručnost i predanost učinile su saradnju besprekorno nagrađujućom." },
    { phases: [2,3,4,5,6], name: "Dominika Bula", role: "Senior Project Consultant, SAP", text: "Ako tražite nekoga ko će uzdrmati status quo i zaista pokrenuti promene, Stefan je osoba za taj posao, jer donosi alate i strategije koje zaista zažive u praksi." },
    { phases: [5,6], name: "Ivana Mitić", role: "Lead Agile Transformation Coach, OTP Bank", text: "Ono što ga izdvaja je sposobnost da prilagodi sesije potrebama učesnika, spajajući teoriju sa praktičnim, realnim primerima." }
  ],
  // Screenshotovi poruka. Fajlovi su u ghl/dokazi/ (poruka-1 … poruka-5) i ugrađeni su u thank you fajl.
  // Ako upišeš link (src), koristi se link umesto ugrađene slike.
  // person: ko je na dokazu. Kod videa i citata ista osoba se pojavljuje samo jednom (prednost: video testimonijal, pa primer iz prakse, pa citat). Screenshotovi se ne ograničavaju.
  SCREENSHOTS: [
    { src: "img/dokazi/poruka-1-linkedin-zerina.jpg", alt: "Preporuka klijentkinje na LinkedInu", person: "Zerina Zinger" },        // dokazi/poruka-1-linkedin-zerina.jpg
    { src: "img/dokazi/poruka-2-idealan-klijent.jpg", alt: "Poruka klijenta: imam idealnog klijenta za tebe" },  // dokazi/poruka-2-idealan-klijent.jpg
    { src: "img/dokazi/poruka-3-veci-profit.jpg", alt: "Poruka klijenta: tvoji sistemi donose veći profit" }, // dokazi/poruka-3-veci-profit.jpg
    { src: "img/dokazi/poruka-4-svima-sam-pricala.jpg", alt: "Poruka klijentkinje: svima sam pričala za tebe", person: "Zerina Zinger" },   // dokazi/poruka-4-svima-sam-pricala.jpg
    { src: "img/dokazi/poruka-5-odusevljena.jpg", alt: "Poruka klijentkinje: baš sam oduševljena", person: "Zerina Zinger" }          // dokazi/poruka-5-odusevljena.jpg
  ],
  NON_ICP: [0, 1],
  PLAN_URLS: { 0: "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6ae3b655ce53a65ab289fe92.pdf", 1: "https://assets.cdn.filesafe.space/KTJnvclSqVShSkKRvUTz/media/6ae3b655ee413271cfd9fe8c.pdf" },
  // "light" ili "dark"; neka se poklapa sa pozadinom sekcija na GHL stranici.
  THEME: "light"
};

/* ================= SADRŽAJ ================= */
const V = {
  V1:{t:"Zašto većina preduzetnika radi non-stop i zašto se to ne vidi u prihodu?",m:12,id:"JVNtyiKAmqA"},
  V2:{t:"Kako smo skoro duplo povećali broj klijenata bez zapošljavanja novih ljudi",m:44,id:"2u4nUdi3X9s"},
  V3:{t:"Skriveni trošak uskih grla",m:44,id:"f45xsx5NPAk"},
  V4:{t:"3 najveće greške koje praktikuju svi neuspešni timovi",m:48,id:"jMCteG6RMyw"},
  V5:{t:"Tim daje maksimum, a firma stagnira?",m:32,id:"E75dV41oVZg"},
  V6:{t:"Zašto se isti problemi stalno vraćaju? (I kako to da zaustaviš)",m:50,id:"741SUENhsBk"},
  V8:{t:"Kako delegirati da tim zaista preuzme odgovornost",m:19,id:"i7vkqoi18gY"},
  V9:{t:"Tajna uspešnog tima leži u tvojoj sposobnosti da delegiraš",m:17,id:"On3Zy2MnzfA"},
  V10:{t:"Prekini začarani krug: Nauči tim da razmišlja umesto da pita",m:19,id:"uQmrZyAvmcc"},
  V11:{t:"Zašto dosadašnje promene u biznisu nisu zaživele?",m:69,id:"yKmtihn8AX8"},
  V15:{t:"Želiš brži rast biznisa? Prvo sredi svoj kalendar!",m:48,id:"Ci1uCZGIsQo"}
};
const PHASE_NAMES = ["Iskra","Dokaz","Ritam","Rasterećenje","Fokus","Dubina","Protok","Arhitektura","Liderstvo","Nasleđe"];

// Bol (prvo pitanje): p = faza na koju bol ukazuje, "change" = promene ne zažive
// hint = dodatno objašnjenje ispod pitanja (nije obavezno)
const PAIN = {
  id:"pain", area:"Za početak", q:"Šta ti je najveći problem u biznisu u poslednja 3 meseca?",
  hint:"Izaberi ono što te najviše muči, čak i ako se prepoznaješ u više odgovora.",
  o:[
    {t:"Još nemam dovoljno klijenata koji mi redovno plaćaju", p:1},
    {t:"Klijenti dolaze na talase: jedan mesec gužva, drugi mesec skoro ništa", p:2},
    {t:"Sve mora da prođe preko mene i ne stižem sve da završim", p:3},
    {t:"Radimo za svakoga ko hoće da plati, a na kraju meseca ostaje sve manje novca", p:4},
    {t:"Klijenti kupe jednom i tu se saradnja završi", p:5},
    {t:"Uvodimo promene u firmi, ali posle nekoliko nedelja sve se vrati na staro", p:"change"}
  ]};

// Prvo pitanje: sam ili tim. Veličina tima se pita samo ako ima tim.
// c = faza po broju ljudi (kompleksnost)
const SOLO = {
  id:"solo", area:"Ti i tim", q:"Da li radiš sam ili imaš tim?",
  hint:"Tim su ljudi koji rade full-time u tvojoj firmi. Honorarci i povremeni saradnici se ne računaju.",
  o:[
    {t:"Radim sam (ponekad uz honorarce ili saradnike)", c:2},
    {t:"Imam tim", c:null}
  ]};

const TEAM = {
  id:"team", area:"Veličina tima", q:"Koliko ljudi radi u firmi full-time, računajući i tebe?",
  hint:"Honorarce i povremene saradnike ne računaj.",
  o:[
    {t:"2 do 4", c:3},
    {t:"5 do 9", c:4},
    {t:"10 do 19", c:5},
    {t:"20 ili više", c:6}
  ]};

// Veličina kao broj: 0 = radi sam, 1 = 2–4, 2 = 5–9, 3 = 10–19, 4 = 20+ (poredi se sa maxTeam u vratima)
function teamSize(){ if (answers.solo==null) return null; if (answers.solo===0) return 0; return answers.team==null ? null : answers.team+1; }
// Veličina tima za GHL polje FSF Tim: sam, 2-4, 5-9, 10-19, 20+
function teamLabel(){ return answers.solo===0 ? "sam" : (["2-4","5-9","10-19","20+"][answers.team] || ""); }
function complexityOf(){ return answers.solo===0 ? SOLO.o[0].c : TEAM.o[answers.team].c; }

// Vrata: faza se zaustavlja na prvim vratima koja nisu prođena.
// s = bodovi (0 ne, 1 delimično, 2 da); gap = šta to znači ako odgovor nije najbolji
const GATES = [
  {phase:1, maxTeam:1, qs:[
    {id:"g1a", area:"Klijenti", q:"Koliko različitih klijenata ti je platilo punu cenu u poslednja 3 meseca?",
     hint:"Ne računaj prijatelje, porodicu i poznanike kojima si radio uz popust ili besplatno.",
     gap:"Još nemaš dovoljno različitih klijenata koji plaćaju punu cenu, pa ne znaš da li ponuda zaista radi na tržištu.",
     o:[{t:"Još mi niko nije platio",s:0,iskra:true},{t:"Plaćali su uglavnom poznanici ili uz popust",s:0},{t:"Od 1 do 4 klijenta",s:1},{t:"5 ili više klijenata, po punoj ceni",s:2}]},
    {id:"g1b", area:"Novac", q:"Da li tačno znaš koliko ti je novca ušlo prošlog meseca i ko ti još duguje?",
     gap:"Nemaš jasnu evidenciju koliko je novca ušlo i ko ti još duguje.",
     o:[{t:"Ne znam tačno",s:0},{t:"Znam okvirno, ali to nemam zapisano",s:1},{t:"Znam tačno, sve vodim u tabeli ili programu",s:2}]}
  ]},
  {phase:2, qs:[
    {id:"g2a", area:"Novi klijenti", q:"Kako su ti dolazili novi klijenti u poslednja 3 meseca?",
     gap:"Novi klijenti ne dolaze redovno, pa ne možeš da planiraš ni posao ni prihod.",
     o:[{t:"Na talase: nekad mnogo odjednom, a onda nedeljama ništa",s:0},{t:"Uglavnom redovno, ali ima meseci kad ih je mnogo manje",s:1},{t:"Redovno, svakog meseca isto ili više nego prethodnog",s:2}]},
    {id:"g2b", area:"Odakle dolaze klijenti", q:"Da li znaš odakle ti dolazi najviše klijenata?",
     hint:"Na primer: preporuke, Instagram, oglasi, LinkedIn, sajt.",
     gap:"Ne znaš pouzdano odakle ti dolaze klijenti, pa ne znaš u šta da uložiš vreme i novac.",
     o:[{t:"Ne znam",s:0},{t:"Imam osećaj, ali to ne pratim",s:1},{t:"Znam, za svaki lead zapisujem odakle je došao",s:2}]},
    {id:"g2c", area:"Dovođenje klijenata", q:"Kada radiš na tome da ti dođu novi klijenti?",
     hint:"Objave, poruke, pozivi, oglasi, javljanje starim kontaktima.",
     gap:"Na dovođenju klijenata radiš tek kad posla nestane, umesto da to bude svakodnevna navika.",
     o:[{t:"Kad posla nestane i postane tiho",s:0},{t:"Nekoliko puta nedeljno, kad stignem",s:1},{t:"Svaki dan, za to imam rezervisano vreme u kalendaru",s:2}]}
  ]},
  {phase:3, qs:[
    {id:"g3a", area:"Ti i posao", q:"Šta bi se desilo da odeš na 7 dana i ne javljaš se na telefon?",
     gap:"Kad tebe nema, posao staje ili se usporava.",
     o:[{t:"Posao bi stao",s:0},{t:"Posao bi išao, ali bi me stalno zvali i pitali",s:1},{t:"Sve bi radilo normalno i bez mene",s:2}]},
    {id:"g3b", area:"Odluke", q:"Kada tim treba nešto da odluči, kako to obično izgleda?",
     gap:"Tim čeka da ti odlučiš, jer nije dogovoreno šta sme da odluči sam.",
     o:[{t:"Skoro za sve pitaju mene",s:0},{t:"Za neke stvari znaju šta smeju sami, za ostalo pitaju mene",s:1},{t:"Jasno je šta tim odlučuje sam i do kog iznosa, a mene pitaju samo za veće stvari",s:2}]},
    {id:"g3c", area:"Kvalitet", q:"Kako se proverava da je posao urađen kako treba pre nego što ode klijentu?",
     gap:"Kvalitet zavisi od toga da li si ti lično proverio posao.",
     o:[{t:"Sve proveravam ja lično",s:0},{t:"Za neke poslove postoji spisak šta mora da bude urađeno (čeklista)",s:1},{t:"Za sve važne poslove postoji čeklista, a ja povremeno proverim samo deo",s:2}]}
  ]},
  {phase:4, qs:[
    {id:"g4a", area:"Zarada", q:"Da li znaš koliko zarađuješ od svake vrste usluge ili klijenta, kad uračunaš vreme koje tim potroši na taj posao?",
     gap:"Ne znaš koji klijenti i koje usluge ti zaista donose novac, a koji samo troše vreme tima.",
     o:[{t:"Ne znam",s:0},{t:"Znam okvirno",s:1},{t:"Znam tačno, za svaku uslugu i vrstu klijenta",s:2}]},
    {id:"g4b", area:"Pravi klijenti", q:"Da li odbijaš klijente koji ti ne odgovaraju?",
     gap:"Prihvataš svakoga ko hoće da plati, pa je svaki projekat drugačiji i teže ga je isporučiti.",
     o:[{t:"Ne, prihvatamo svakoga ko hoće da plati",s:0},{t:"Ponekad, kad je baš očigledno da nije za nas",s:1},{t:"Da, tačno znamo kakav nam klijent odgovara, a ostalima kažemo ne",s:2}]},
    {id:"g4c", area:"Podaci i brojke", q:"Gde se nalaze podaci o klijentima i najvažnije brojke firme?",
     gap:"Podaci o klijentima su razbacani na više mesta i brojke se ne prate redovno.",
     o:[{t:"Razbacani su po mejlu, porukama i u glavama ljudi",s:0},{t:"Deo je u CRM-u ili tabeli, a deo je i dalje razbacan",s:1},{t:"Sve je na jednom mestu i svakog meseca pregledamo brojke",s:2}]}
  ]},
  {phase:5, qs:[
    {id:"g5a", area:"Posle prve saradnje", q:"Šta klijent obično kupi kada završi prvu saradnju sa vama?",
     gap:"Klijent posle prve kupovine nema šta dalje da kupi, pa stalno moraš da tražiš nove klijente.",
     o:[{t:"Ništa, kupi jednom i ode",s:0},{t:"Ponekad kupi još nešto, ali to nije isplanirano",s:1},{t:"Imamo sledeću ponudu koju klijenti redovno kupuju",s:2}]},
    {id:"g5b", area:"Prodaja i isporuka", q:"Da li je ono što prodaja obeća klijentu isto kao ono što tim posle isporuči?",
     gap:"Prodaja obećava jedno, a isporuka radi drugo, pa klijenti ostaju nezadovoljni.",
     o:[{t:"Ne, često se razlikuje",s:0},{t:"Uglavnom je isto, ali ponekad se razilazi",s:1},{t:"Da, i prodaja i isporuka koriste isti opis ponude",s:2}]}
  ]}
];

// Rezultat po fazi: kočnica, spremnost (nastavlja rečenicu "Spreman si za fazu X kada:"),
// 3 koraka [naslov, šta tačno radiš, brojka ili primer], "ne radi sada", videi redom [id, oznaka, zašto]
const RESULT = {
  0:{brake:"Još nemaš ponudu koju neko želi da plati.",
     ready:"imaš jasnu ponudu i prve ljude koji su spremni da je plate.",
     acts:[
      ["Napiši ponudu u jednoj rečenici","U jednoj rečenici napiši za koga je ponuda, koji problem rešava i koji rezultat klijent dobija. Ne nabrajaj usluge, nego opiši rezultat.","Primer: „Vlasnicima malih agencija skraćujem vreme isporuke projekta sa 30 na 15 dana.“"],
      ["Razgovaraj sa 10 ljudi kojima je ponuda namenjena","Pitaj ih šta ih najviše muči i šta su već probali da to reše. U ovim razgovorima ništa ne prodaješ, samo slušaš i zapisuješ.","Cilj: 10 razgovora za 14 dana. Zapiši njihove reči, kasnije ćeš ih koristiti u ponudi."],
      ["Ponudi prvu verziju trojici ljudi","Ne čekaj da ponuda bude savršena. Ponudi je ljudima sa kojima si razgovarao i dogovori cenu unapred, makar bila i niža od one koju planiraš.","Cilj: 3 osobe koje kažu „da“ i plate."]],
     dont:"Ne troši vreme i novac na sajt, logo i oglase dok ti tri osobe ne plate.",
     vids:[["V1","Gledaj prvo","Kako marketing, prodaja i isporuka zajedno čine jedan put klijenta i zašto biznis bez tog sistema radi non-stop, a prihod ne raste."]]},
  1:{brake:"Još nemaš klijente koji ti redovno plaćaju.",
     ready:"više različitih klijenata plaća punu cenu, i to više meseci zaredom.",
     acts:[
      ["Pretvori rezultate prvih klijenata u 3 kratke priče","Pitaj svakog klijenta tri stvari: kako je bilo pre saradnje, šta se promenilo i koliko (u novcu, vremenu ili broju). Od toga napravi kratku priču sa jednom brojkom.","Cilj: 3 priče za 14 dana, koje ćeš koristiti u razgovorima i objavama."],
      ["Vodi svaki prodajni razgovor na isti način","Prvo pitaj o problemu klijenta, zatim pokaži rezultat koji dobija, pa tek onda reci cenu. Napiši rečenicu kojom saopštavaš cenu i vežbaj je naglas dok ne zvuči prirodno.","Meri: od 10 razgovora, koliko ljudi je platilo."],
      ["Uvedi naplatu i evidenciju","Napravi jednu tabelu: ko je platio, koliko, kada i ko ti još duguje. Proveri da naplata radi tako što ćeš primiti jednu pravu uplatu.","Cilj: 5 različitih klijenata koji plaćaju punu cenu."]],
     dont:"Ne puštaj plaćene oglase dok ti 3 do 5 ljudi ne plati punu cenu.",
     vids:[["V1","Gledaj prvo","Kako marketing, prodaja i isporuka zajedno čine jedan put klijenta i zašto preporuke kao jedini izvor klijenata drže biznis u mestu."]]},
  2:{brake:"Klijenti dolaze na talase: jedan mesec gužva, drugi mesec tišina.",
     ready:"novi klijenti dolaze svake nedelje, a svaki klijent dobija isti kvalitet.",
     acts:[
      ["Rezerviši vreme za dovođenje klijenata, svaki dan","Svakog radnog dana odvoji 90 minuta u kalendaru, u delu dana kad imaš najviše energije, samo za dovođenje novih klijenata: objave, poruke, pozivi, javljanje starim kontaktima. Radi to i kad imaš mnogo posla, ne samo kad postane tiho.","Cilj: 20 takvih blokova u narednih 30 dana."],
      ["Zapisuj odakle dolazi svaki lead","Za svaki upit zapiši datum, odakle je došao i kako se završio. Posle 30 dana videćeš koji izvor ti donosi najviše klijenata i tu ćeš ulagati više vremena.","Primer: ako 7 od 10 klijenata dolazi preko preporuka, preporuke treba da dobiju najviše tvog vremena."],
      ["Vodi svaki prodajni razgovor po istom redosledu","Postavljaj ista pitanja istim redom u svakom razgovoru. Posle razgovora zapiši da li je klijent kupio ili nije, i zašto.","Meri koliko razgovora se završi kupovinom, na primer 3 od 10."]],
     dont:"Ne otvaraj nove kanale za privlačenje klijenata. Ako tim već kasni sa isporukom, prvo napravi čeklistu isporuke, pa tek onda dovodi više klijenata.",
     vids:[["V1","Gledaj prvo","Zašto radiš non-stop, a prihod ne raste, i kako marketing, prodaja i isporuka treba da rade kao jedan put."],
           ["V15","Zatim, kad kreneš sa prvim korakom","Kako da u kalendaru zaštitiš vreme za dovođenje klijenata i zašto ne treba da radiš više od 3 stvari istovremeno."]]},
  3:{brake:"Sve mora da prođe preko tebe.",
     ready:"tim radi i sam donosi odluke u granicama koje ste dogovorili, bez tebe.",
     acts:[
      ["Zapisuj sva pitanja tima 3 dana","Tri dana zapisuj svako pitanje i svaku odluku zbog koje tim dolazi kod tebe. Za 10 najčešćih odredi ko ubuduće odlučuje i do koje granice.","Primer: tim sam odobrava troškove do 500 €, a tebe pita samo za veće iznose."],
      ["Napravi čeklistu za posao koji ti uvek proveravaš","Zapiši šta sve mora da bude urađeno da bi posao bio dobar. Tim proverava svoj rad po toj čeklisti, a ti povremeno pogledaš samo deo posla.","Cilj: jedna čeklista, za posao koji najduže čeka na tvoju proveru."],
      ["Uvedi stalne termine za pitanja tima","Dva puta dnevno odvoji po 30 minuta u kojima tim može da te pita šta treba, umesto da te prekidaju u bilo kom trenutku. Van tih termina zovu te samo za hitne stvari koje unapred dogovorite.","Meri koliko puta dnevno te prekidaju, sada i posle 2 nedelje."]],
     dont:"Ne zapošljavaj novog čoveka tamo gde je trenutno najveća gužva. Prvo pogledaj na kom mestu posao najduže čeka na tebe.",
     vids:[["V9","Gledaj prvo","7 nivoa delegiranja: kako da tim preuzme odgovornost, a ti tačno znaš koliko slobode daješ za koju odluku."],
           ["V10","Zatim, kad zapišeš pitanja tima","Zašto te tim i dalje stalno pita i 5 poteza da počne da razmišlja sam. Studija slučaja sa granicom od 500 €."],
           ["V2","Dopuna, ako želiš da vidiš ceo put","Studija slučaja: kako je firma sa 10 došla na 18 klijenata bez novog zapošljavanja, a vlasnik se sa 70 spustio na 40 sati rada nedeljno."]]},
  4:{brake:"Firma radi sve za svakoga.",
     ready:"tačno znaš kakav ti klijent odgovara i šta mu prodaješ, a ostalima kažeš ne.",
     acts:[
      ["Izračunaj koliko zarađuješ po danu rada","Za svaku vrstu usluge i klijenta uzmi prihod iz poslednja 3 meseca, oduzmi direktne troškove i podeli sa brojem dana koje je tim potrošio na taj posao. Tako vidiš koji posao zaista donosi novac.","Primer: agencija od 5 ljudi je ovako našla razliku od 2.800 € mesečno između svojih usluga."],
      ["Opiši klijenta koji ti najviše odgovara","Pogledaj sa kojim klijentima najviše zarađuješ i koji su najzadovoljniji. Opiši ih, pa napiši 3 pitanja koja postavljaš svakom novom leadu pre prvog razgovora.","Cilj: jasan spisak kome kažete ne."],
      ["Stavi sve podatke na jedno mesto i prati 4 brojke","Svi podaci o klijentima idu u jedan CRM ili jednu tabelu. Svakog meseca pogledaj 4 brojke: koliko leadova postane klijent, koliko brzo odgovarate na upit, koliko su klijenti zadovoljni i koliko novca ostane na kraju meseca.","Cilj: prvi mesečni pregled za 30 dana."]],
     dont:"Ne uvodi nove usluge i ne ulaži više u marketing dok ne znaš kojim klijentima kažeš ne.",
     vids:[["V2","Gledaj prvo","Studija slučaja: šta se desi kad se firma fokusira. Sa 10 na 18 klijenata bez novog zapošljavanja, a marža je porasla sa 44% na 66%."],
           ["V3","Zatim, kad kreneš da računaš maržu po danu rada","Kako da izračunaš koliko zarađuješ po danu rada i kako da nađeš uska grla koja troše kapacitet tima."]]},
  5:{brake:"Klijenti kupe jednom i nemaju šta dalje da kupe od tebe.",
     ready:"postojeći klijenti imaju sledeću ponudu koju kupuju posle prve saradnje.",
     acts:[
      ["Zapisuj šta klijenti traže posle prve kupovine","Narednih 30 dana zapisuj svaki put kad klijent pita za nešto što trenutno ne nudite ili traži nastavak saradnje. Ono što se najčešće ponavlja kandidat je za sledeću ponudu.","Cilj: jedan jasan kandidat za sledeću ponudu za 30 dana."],
      ["Isprobaj sledeću ponudu sa najboljim klijentima","Za početak je ponudi samo 3 do 5 najboljih klijenata, po višoj ceni od osnovne ponude. Zapiši ko je kupio, ko nije i zašto.","Cilj: 3 kupovine u ovom probnom krugu."],
      ["Napravi jedan opis ponude za prodaju i isporuku","Napiši jedan dokument koji tačno opisuje šta klijent dobija, i neka ga koriste i prodaja i tim koji isporučuje. Odredi jednu osobu koja je odgovorna za predaju klijenta iz prodaje timu za isporuku.","Meri koliko puta klijent kaže „nisam ovo kupio“ ili „ovo mi nije obećano“."]],
     dont:"Ne pravi potpuno novu ponudu dok osnovna ponuda ne radi bez stalnog gašenja požara.",
     vids:[["V2","Gledaj prvo","Studija slučaja: kako je firma sa 10 došla na 18 klijenata bez novog zapošljavanja i sredila put klijenta od upita do isporuke."],
           ["V3","Zatim, kad krenete sa probnom ponudom","Koliko te koštaju uska grla između timova: kako da izračunaš maržu po danu rada i nađeš mesta gde posao čeka."]]},
  6:{brake:"Vrednost se gubi tamo gde posao prelazi iz jednog tima u drugi.",
     ready:"ceo put od upita do isporuke merite i vodite kao jednu celinu, a ne kao posao svakog tima posebno.",
     acts:[
      ["Nacrtaj put od upita do isporuke","Prođi kroz sve timove i za svaki korak zapiši koliko vremena se na njemu zaista radi, a koliko posao samo čeka.","Primer: posao često čeka više od 90% ukupnog vremena."],
      ["Uvedi jednu brojku koja je zajednička za sve timove","Pratite vreme od prvog upita do isporuke klijentu, umesto da svaki tim ima samo svoje ciljeve.","Cilj: prvi zajednički pregled za 30 dana."],
      ["Pronađite jedno glavno ograničenje","Na ovoj veličini firme opšti saveti ne pomažu mnogo. Potrebna je dijagnoza koja pokazuje jedno mesto koje najviše koči ceo sistem.","Cilj: jedno ograničenje i najviše 3 akcije za njega."]],
     dont:"Ne uvodite novu organizaciju ili novi alat dok ne znate na kom mestu posao najviše stoji.",
     vids:[["V5","Gledaj prvo","Kako ciljevi različitih timova koče firmu i kako to da prepoznaš."],
           ["V6","Zatim, kad nacrtate put od upita do isporuke","Zašto se isti problemi stalno vraćaju i kako da to zaustaviš, i pre nego što promena izazove nove probleme."],
           ["V4","Dopuna, kad krenete sa promenama","3 greške koje prave timovi, među njima i ta da nešto što je logično još uvek nije urađeno."]]}
};
const CHANGE_VIDEO = ["V6","Dopuna, kad krenete sa prvim korakom","Zašto se isti problemi stalno vraćaju i kako da to zaustaviš."];
const PAIN_DOPUNA_LABEL = "Dopuna, zbog problema koji si naveo na početku";

// Verzije po veličini: solo = radi sam, small = 2 do 4 ljudi, large = 5 i više.
// Polja koja nisu navedena ostaju iz osnovnog pitanja. Broj odgovora i bodovi moraju da ostanu isti.
const VARIANTS = {
  pain:{
    solo:{o:[
      {t:"Još nemam dovoljno klijenata koji mi redovno plaćaju", p:1},
      {t:"Klijenti dolaze na talase: jedan mesec gužva, drugi mesec skoro ništa", p:2},
      {t:"Ne stižem sve sam da uradim, a ne znam šta i kome da prepustim", p:3},
      {t:"Radim za svakoga ko hoće da plati, a na kraju meseca ostaje malo novca", p:4},
      {t:"Klijenti kupe jednom i tu se saradnja završi", p:5},
      {t:"Krenem da uvodim red i nove navike u poslu, ali posle nekoliko nedelja sve se vrati na staro", p:"change"}]},
    large:{o:[
      {t:"Još nemamo dovoljno klijenata koji redovno plaćaju", p:1},
      {t:"Klijenti dolaze na talase: jedan mesec gužva, drugi mesec skoro ništa", p:2},
      {t:"Previše odluka i problema i dalje stiže do mene, iako imam tim", p:3},
      {t:"Radimo za svakoga ko hoće da plati, a marža je sve manja iako posla ima sve više", p:4},
      {t:"Klijenti kupe jednom i tu se saradnja završi", p:5},
      {t:"Uvodimo promene u firmi, ali posle nekoliko nedelja tim se vrati na stari način rada", p:"change"}]}
  },
  g2c:{
    small:{q:"Kada ti ili neko iz tima radite na tome da dođu novi klijenti?",
      o:[{t:"Kad posla nestane i postane tiho",s:0},{t:"Nekoliko puta nedeljno, kad neko stigne",s:1},{t:"Svaki dan, i tačno se zna ko je za to zadužen i kada to radi",s:2}]},
    large:{q:"Ko u firmi radi na dovođenju novih klijenata i kada?",
      gap:"Dovođenje klijenata nema jasnu odgovornu osobu ni plan, pa se na tome radi tek kad posla nestane.",
      o:[{t:"Niko nije posebno zadužen, radimo na tome kad posla nestane",s:0},{t:"Neko je zadužen, ali to radi povremeno, kad stigne od drugih obaveza",s:1},{t:"Neko je zadužen i radi to po planu svake nedelje, a rezultate pratimo",s:2}]}
  },
  g3a:{
    solo:{q:"Šta bi se desilo sa poslom da 7 dana ne radiš?",
      gap:"Ceo posao zavisi samo od tebe, pa kad ti ne radiš, ne radi ni biznis.",
      o:[{t:"Sve bi stalo i klijenti bi čekali da se vratim",s:0},{t:"Neko bi mogao da odradi deo posla, ali bi me stalno zvao i pitao",s:1},{t:"Imam nekoga ko bi preuzeo posao po mojim uputstvima",s:2}]},
    large:{o:[{t:"Mnogo toga bi stalo i čekalo da se vratim",s:0},{t:"Posao bi išao, ali bi me stalno zvali zbog odluka i problema",s:1},{t:"Sve bi radilo normalno i bez mene",s:2}]}
  },
  g3b:{
    solo:{area:"Uputstva", q:"Da li imaš zapisano kako se radi posao koji najčešće ponavljaš, tako da bi neko drugi mogao da ga uradi?",
      gap:"Način na koji se posao radi postoji samo u tvojoj glavi, pa ne možeš nikome da ga prepustiš.",
      o:[{t:"Ne, sve je u mojoj glavi",s:0},{t:"Za neke stvari imam zapisano",s:1},{t:"Da, za glavne poslove imam uputstva ili čekliste",s:2}]},
    small:{q:"Kada neko iz tima treba nešto da odluči, kako to obično izgleda?"},
    large:{q:"Kada tim ili vođe timova treba nešto da odluče, kako to obično izgleda?",
      gap:"Odluke i dalje stižu do tebe, jer nije dogovoreno šta tim i vođe timova smeju da odluče sami.",
      o:[{t:"Skoro sve odluke na kraju stižu do mene",s:0},{t:"Vođe timova odlučuju o nekim stvarima, a za ostalo pitaju mene",s:1},{t:"Jasno je šta tim i vođe odlučuju sami i do kog iznosa, a do mene stižu samo velike odluke",s:2}]}
  },
  g3c:{
    solo:{area:"Šta prepuštaš", q:"Da li znaš koji posao bi prvi prepustio nekom drugom?",
      hint:"Na primer: administraciju, fakture, zakazivanje, objave ili deo isporuke.",
      gap:"Nije jasno koji posao prvi prepuštaš drugome i da li se to isplati.",
      o:[{t:"Ne, nisam o tome razmišljao",s:0},{t:"Znam šta bih prepustio, ali nisam proverio da li mogu to da platim",s:1},{t:"Znam tačno šta prepuštam prvo, koliko bi me to koštalo i koliko vremena dobijam",s:2}]},
    large:{q:"Kako se proverava kvalitet posla pre nego što ode klijentu?",
      gap:"Kvalitet i dalje zavisi od toga da li si ti lično proverio posao.",
      o:[{t:"Na kraju sve proveravam ja",s:0},{t:"Za neke poslove postoji čeklista ili ih proverava neko iz tima",s:1},{t:"Za sve važne poslove postoje čekliste i neko iz tima je zadužen za proveru, a ja gledam samo povremeno",s:2}]}
  },
  g4a:{
    solo:{q:"Da li znaš koliko zarađuješ od svake vrste usluge ili klijenta, kad uračunaš vreme koje potrošiš na taj posao?",
      gap:"Ne znaš koji klijenti i koje usluge ti zaista donose novac, a koji samo troše tvoje vreme."}
  },
  g4b:{
    solo:{gap:"Prihvataš svakoga ko hoće da plati, pa je svaki posao drugačiji i teže ga je isporučiti.",
      o:[{t:"Ne, prihvatam svakoga ko hoće da plati",s:0},{t:"Ponekad, kad je baš očigledno da nije za mene",s:1},{t:"Da, tačno znam kakav mi klijent odgovara, a ostalima kažem ne",s:2}]}
  },
  g4c:{
    solo:{q:"Gde se nalaze podaci o klijentima i tvoje najvažnije brojke?",
      o:[{t:"Razbacani su po mejlu, porukama i u mojoj glavi",s:0},{t:"Deo je u CRM-u ili tabeli, a deo je i dalje razbacan",s:1},{t:"Sve je na jednom mestu i svakog meseca pregledam brojke",s:2}]}
  },
  g5a:{
    solo:{q:"Šta klijent obično kupi kada završi prvu saradnju sa tobom?"}
  },
  g5b:{
    solo:{skip:true} // kad radi sam, prodaja i isporuka su ista osoba
  }
};

// Verzije rezultata. acts: null na nekom mestu znači da korak ostaje iz osnovnog rezultata.
const RESULT_VARIANTS = {
  2:{
    small:{acts:[["Odredi ko i kada radi na dovođenju klijenata, svaki dan","Odredi jednu osobu, sebe ili nekog iz tima, koja je odgovorna za dovođenje novih klijenata. Rezerviši joj 90 minuta svakog radnog dana u kalendaru za objave, poruke, pozivi i javljanje starim kontaktima. To vreme se ne pomera zbog drugog posla.","Cilj: 20 takvih blokova u narednih 30 dana."],null,null]},
    large:{acts:[["Odredi ko i kada radi na dovođenju klijenata, svake nedelje","Odredi jednu osobu koja je odgovorna za dovođenje novih klijenata i napravi joj nedeljni plan: koliko objava, poruka i poziva, i u koje dane. Rezultate gledate zajedno jednom nedeljno.","Cilj: 4 nedelje zaredom u kojima je plan urađen."],null,null]}
  },
  3:{
    solo:{brake:"Sve radiš sam i ne stižeš, a posao zavisi samo od tebe.",
      ready:"imaš prvu osobu koja pouzdano radi deo posla po tvojim uputstvima.",
      acts:[
        ["Zapiši sve što radiš tokom jedne nedelje","Nedelju dana zapisuj svaki posao koji radiš i koliko traje. Na kraju označi poslove koje samo ti možeš da radiš i one koje bi neko drugi mogao da uradi uz dobro uputstvo.","Primer: ako 8 sati nedeljno odlazi na fakture, mejlove i zakazivanje, to je prvi posao koji prepuštaš."],
        ["Napiši uputstvo za prvi posao koji prepuštaš","Opiši korak po korak kako se taj posao radi i dodaj čeklistu po kojoj se vidi da je urađen dobro. Piši tako da neko može da ga uradi bez tvog dodatnog objašnjavanja.","Cilj: jedno uputstvo i jedna čeklista za 14 dana."],
        ["Prepusti taj posao honorarcu pre nego što zaposliš nekoga","Daj taj posao honorarcu ili saradniku na 4 nedelje. Proveravaj njegov rad po čeklisti, umesto da posao ponovo radiš sam.","Meri koliko sati nedeljno si dobio nazad za dovođenje klijenata i važniji posao."]],
      dont:"Ne zapošljavaj nikoga full-time dok nisi zapisao šta tačno radi i kako se proverava da je posao dobro urađen.",
      vids:[["V15","Gledaj prvo","Kako da središ kalendar, radiš na najviše 3 stvari istovremeno i napraviš mesto za posao koji samo ti možeš da radiš."],
            ["V1","Zatim, kad zapišeš svoju nedelju","Zašto preduzetnik radi non-stop, a prihod ne raste, i kako marketing, prodaja i isporuka treba da rade kao jedan put."]]},
    large:{brake:"Previše odluka i dalje prolazi kroz tebe.",
      acts:[
        ["Zapisuj sve odluke koje stižu do tebe, 5 radnih dana","Pet radnih dana zapisuj svako pitanje i svaku odluku koja stigne do tebe, i od koga. Za 10 najčešćih odredi ko ubuduće odlučuje: tim, vođa tima ili ti, i do koje granice.","Primer: vođa tima sam odobrava troškove do 500 €, a tebe pita samo za veće iznose."],
        null,
        ["Uvedi nedeljni sastanak sa vođama timova","Umesto da ti svako dolazi sa pitanjima kad mu zatreba, jednom nedeljno sa vođama timova prođi otvorene odluke i probleme. Između sastanaka zovu te samo za hitne stvari koje unapred dogovorite.","Meri koliko pitanja i odluka nedeljno stiže direktno do tebe, sada i posle 4 nedelje."]],
      dont:"Ne dodaj nove ljude ni nove vođe timova dok nije jasno koje odluke smeju da donose bez tebe."}
  },
  4:{
    solo:{brake:"Radiš za svakoga ko hoće da plati.",
      ready:"tačno znaš kakav ti klijent odgovara i šta mu prodaješ, a ostalima kažeš ne.",
      acts:[["Izračunaj koliko zarađuješ po danu rada","Za svaku vrstu usluge i klijenta uzmi prihod iz poslednja 3 meseca, oduzmi direktne troškove i podeli sa brojem dana koje si proveo radeći taj posao. Tako vidiš koji posao zaista donosi novac.","Primer: ako ti jedna usluga donosi 300 € po danu rada, a druga 120 €, znaš gde treba da ide tvoje vreme."],null,null]}
  },
  5:{
    solo:{acts:[null,null,["Napiši jasan opis onoga što klijent dobija","Napiši jedan dokument koji tačno opisuje šta je uključeno u svaku ponudu, a šta nije. Koristi ga i kada prodaješ i kada radiš, da klijent dobije baš ono što je kupio.","Meri koliko puta klijent kaže „mislio sam da je i ovo uključeno“."]]}
  }
};

// Dodatna pitanja po vratima (ostali uslovi spremnosti iz S1)
GATES[0].qs.push(
  {id:"g1c", area:"Zašto te biraju", q:"Da li znaš zašto te klijenti biraju i zbog čega ti plaćaju?",
   gap:"Ne znaš tačno zašto te klijenti biraju, pa ne znaš šta da naglasiš u ponudi.",
   o:[{t:"Ne znam tačno",s:0},{t:"Imam pretpostavku, ali klijente to nisam pitao",s:1},{t:"Znam, jer sam ih pitao i svi navode slične razloge",s:2}]});
GATES[1].qs.push(
  {id:"g2d", area:"Kvalitet", q:"Koliko često klijenti traže da se nešto popravi ili se žale na urađeno?",
   gap:"Kvalitet nije isti za svakog klijenta, pa dorade i žalbe troše vreme koje bi išlo na nove klijente.",
   o:[{t:"Često, skoro kod svakog drugog posla",s:0},{t:"Povremeno",s:1},{t:"Retko, svaki klijent dobija isti kvalitet",s:2}]},
  {id:"g2e", area:"Novac", q:"Da li imaš odvojen poslovni račun i novac koji redovno odvajaš za porez?",
   gap:"Novac nije organizovan: poslovni i lični novac se mešaju ili nema rezerve za porez.",
   o:[{t:"Ne, sve je na jednom mestu",s:0},{t:"Delimično, nešto od toga imam",s:1},{t:"Da, imam odvojen račun i redovno odvajam novac za porez",s:2}]});
GATES[2].qs.push(
  {id:"g3d", area:"Početak saradnje", q:"Šta se dešava sa novim klijentom u prvih 7 dana saradnje?",
   gap:"Novi klijent nema jasan početak saradnje, pa sporije dolazi do prvog rezultata i češće zove sa pitanjima.",
   o:[{t:"Nema ustaljenog postupka, svaki put je drugačije",s:0},{t:"Imamo neki redosled, ali zavisi od toga ko radi",s:1},{t:"Postoji isti postupak za svakog klijenta i on brzo vidi prvi rezultat",s:2}]});
GATES[3].qs.push(
  {id:"g4d", area:"Prodaja u brojkama", q:"Da li pratite koliko leadova postane klijent i koliko brzo odgovarate na upit?",
   gap:"Ne pratite koliko leadova postane klijent ni koliko brzo odgovarate, pa ne vidite gde gubite prodaju.",
   o:[{t:"Ne pratimo",s:0},{t:"Pratimo povremeno ili samo okvirno",s:1},{t:"Pratimo svakog meseca",s:2}]},
  {id:"g4e", area:"Pravila tima", q:"Da li tim ima zapisana osnovna pravila rada?",
   hint:"Na primer: radno vreme, odmori, ko kome odgovara i šta se od koga očekuje.",
   gap:"Tim nema zapisana osnovna pravila, pa se ista pitanja i nesporazumi stalno ponavljaju.",
   o:[{t:"Ne, sve se dogovara usput",s:0},{t:"Neka pravila postoje, ali nisu zapisana na jednom mestu",s:1},{t:"Da, zapisana su i svi ih znaju",s:2}]});
GATES[4].qs.push(
  {id:"g5c", area:"Plan novca", q:"Da li imaš budžet i plan prihoda i troškova za narednih nekoliko meseci?",
   gap:"Nema budžeta ni plana prihoda i troškova, pa ne znaš koliko smeš da uložiš u rast.",
   o:[{t:"Nemam",s:0},{t:"Imam okvirno, u glavi",s:1},{t:"Da, zapisano je i pregledam ga svakog meseca",s:2}]},
  {id:"g5d", area:"Kad neko ode", q:"Kada neko ode iz firme, šta se desi sa njegovim poslom i podacima?",
   gap:"Kad neko ode, sa njim odu i podaci i znanje, pa novi čovek kreće od nule.",
   o:[{t:"Podaci i nalozi odu sa njim",s:0},{t:"Deo ostane, a deo se izgubi",s:1},{t:"Sve je na nalozima firme i zapisano je kako se posao radi",s:2}]});

Object.assign(VARIANTS, {
  g1c:{},
  g2d:{solo:{q:"Koliko često klijenti traže da nešto popraviš ili se žale na urađeno?"}},
  g3d:{solo:{o:[{t:"Nemam ustaljen postupak, svaki put je drugačije",s:0},{t:"Imam neki redosled, ali ga nemam zapisanog",s:1},{t:"Imam zapisan postupak koji je isti za svakog klijenta i on brzo vidi prvi rezultat",s:2}]}},
  g4d:{solo:{q:"Da li pratiš koliko leadova postane klijent i koliko brzo odgovaraš na upit?",
    gap:"Ne pratiš koliko leadova postane klijent ni koliko brzo odgovaraš, pa ne vidiš gde gubiš prodaju.",
    o:[{t:"Ne pratim",s:0},{t:"Pratim povremeno ili samo okvirno",s:1},{t:"Pratim svakog meseca",s:2}]}},
  g4e:{solo:{skip:true}},
  g5d:{solo:{skip:true}}
});

// Najmanje ovoliko pitanja: posle određene faze upitnik nastavlja pitanjima iz sledeće faze (ne menjaju fazu)
const MIN_Q = 10;

/* ================= LOGIKA ================= */
const root = document.getElementById("fsf"), app = document.getElementById("fsf-app");
root.dataset.theme = CONFIG.THEME;
const ALLQ = [SOLO, TEAM, PAIN].concat(...GATES.map(g=>g.qs));
let answers = {}, history = [];

function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function slug(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function top(){ try{ root.scrollIntoView({block:"start"}); }catch(e){} }

// Odgovori u adresi: "pain2-team2-g2a2-..." (indeksi odgovora, bez ličnih podataka)
function encode(){ return ALLQ.filter(q=>answers[q.id]!=null).map(q=>q.id+answers[q.id]).join("-"); }
function decode(r){
  const out = {};
  for (const part of String(r).split("-")){
    const m = /^([a-z0-9]*?[a-z])(\d+)$/.exec(part); if (!m) return null;
    const q = ALLQ.find(x=>x.id===m[1]); if (!q || !q.o[+m[2]]) return null;
    out[q.id] = +m[2];
  }
  return out.pain!=null && out.solo!=null && (out.solo===0 || out.team!=null) ? out : null;
}

// Verzija pitanja i rezultata prema veličini (solo / small / large)
function seg(){ const t = teamSize(); return t==null ? null : t===0 ? "solo" : t===1 ? "small" : "large"; }
function view(q){ const v = VARIANTS[q.id] && seg() && VARIANTS[q.id][seg()]; return v ? Object.assign({}, q, v) : q; }
function qsFor(g){ return g.qs.filter(q=>!view(q).skip); }
function resultFor(p){
  const base = RESULT[p], v = RESULT_VARIANTS[p] && seg() && RESULT_VARIANTS[p][seg()];
  if (!v) return base;
  const r = Object.assign({}, base, v);
  r.acts = base.acts.map((a,i)=> (v.acts && v.acts[i]) || a);
  return r;
}
function isIskra(){ return answers.g1a!=null && GATES[0].qs[0].o[answers.g1a].iskra; }

function gateScore(g){
  const s = qsFor(g).map(q=>answers[q.id]!=null ? q.o[answers[q.id]].s : null);
  if (s.some(x=>x==null)) return null;
  // prođeno: nijedan odgovor 0; delimičnih (1) najviše 1, a kod vrata sa 4+ pitanja najviše 2
  return s.every(x=>x>=1) && s.filter(x=>x===1).length <= (s.length>=4 ? 2 : 1);
}
function activeGates(){ const t = teamSize(); return GATES.filter(g=>g.maxTeam==null || t==null || t<=g.maxTeam); }
function nextQuestion(){
  if (answers.solo==null) return SOLO;
  if (answers.solo===1 && answers.team==null) return TEAM;
  if (answers.pain==null) return PAIN;
  if (isIskra()) return null; // niko još nije platio: dalja pitanja o klijentima nemaju smisla
  let found = false;
  for (const g of activeGates()){
    for (const q of qsFor(g)) if (answers[q.id]==null){
      if (!found) return q;
      // faza je poznata: nastavi do MIN_Q pitanja (osim za Iskru, njoj pitanja o klijentima nemaju smisla)
      return (!isIskra() && Object.keys(answers).length < MIN_Q) ? q : null;
    }
    if (!found && !gateScore(g)) found = true;
  }
  return null;
}
function computePhase(){
  if (isIskra()) return {phase:0, gate:GATES[0]};
  for (const g of activeGates()){ const s = gateScore(g); if (s===null) return null; if (!s) return {phase:g.phase, gate:g}; }
  return {phase:6, gate:null};
}
function estTotal(){
  const done = Object.keys(answers).length;
  if (answers.pain==null) return 12;
  const open = activeGates().filter(g=>qsFor(g).some(q=>answers[q.id]==null)).slice(0,2);
  return Math.max(MIN_Q, done + open.reduce((a,g)=>a+qsFor(g).filter(q=>answers[q.id]==null).length,0));
}
function gapsFor(gate){
  if (!gate) return [];
  return qsFor(gate).filter(q=>answers[q.id]!=null).map(view).map(q=>({q, s:q.o[answers[q.id]].s})).filter(x=>x.s<2).sort((a,b)=>a.s-b.s).slice(0,3);
}
function pickVideos(phase){
  const base = resultFor(phase).vids.slice();
  const pain = view(PAIN).o[answers.pain].p;
  let extra = null;
  if (pain==="change") extra = CHANGE_VIDEO;
  else if (pain!==phase && !(phase<=1 && pain<=1) && RESULT[pain]){
    const v = resultFor(pain).vids[0];
    if (!base.some(b=>b[0]===v[0])) extra = [v[0], PAIN_DOPUNA_LABEL, v[2]];
  }
  if (extra && !base.some(b=>b[0]===extra[0])) return base.slice(0,2).concat([extra]);
  return base.slice(0,3);
}

/* ---------- korak 1: upitnik ---------- */
function renderIntro(){
  const ex = RESULT[3], step = ex.acts[0];
  const startBtn = id => `<div class="istart"><button class="btn ctabig" id="${id}">Kreni, traje oko 5 minuta<small>Besplatno. Rezultat vidiš odmah, plan stiže na mejl.</small></button></div>`;
  app.innerHTML = `
  <div class="stack intro">
    <p class="eyebrow">Futurist Systems · upitnik za vlasnike biznisa</p>
    <h1>Saznaj šta tačno koči tvoj biznis i šta da uradiš u narednih 30 dana</h1>
    <p>Većina vlasnika oseća da nešto ne radi kako treba, ali ne zna šta tačno. Pa rade sve odjednom: više marketinga, novi alat, novi čovek. Ovaj upitnik ti pokazuje <b>jednu stvar</b> koju treba prvo da središ, i kako.</p>
    ${startBtn("fsf-start")}
  </div>

  <div class="sec stack">
    <p class="eyebrow">Šta dobijaš na kraju</p>
    <h2>Ne opšte savete, nego plan za tvoj biznis</h2>
    <div class="igrid">
      <div class="card"><b class="inum">01</b><h3>U kojoj si fazi rasta</h3><p class="muted">Jedna od 10 faza, od Iskre do Nasleđa. Vidiš gde si, šta si već rešio i šta te deli od sledeće faze.</p></div>
      <div class="card"><b class="inum">02</b><h3>Ključna kočnica</h3><p class="muted">Jedna stvar koja te sada najviše drži u mestu, napisana jednom rečenicom. Ne lista od 20 problema.</p></div>
      <div class="card"><b class="inum">03</b><h3>3 koraka za 30 dana</h3><p class="muted">Svaki korak ima šta tačno radiš i jednu brojku ili primer po kojem znaš da je urađeno.</p></div>
      <div class="card"><b class="inum">04</b><h3>Šta za sada da ne radiš</h3><p class="muted">Gde da ne trošiš novac i vreme dok ne središ kočnicu. Često to štedi više od samih koraka.</p></div>
      <div class="card"><b class="inum">05</b><h3>Plan u PDF-u na mejl</h3><p class="muted">Sve na jednom mestu: faza, koraci, provera spremnosti za sledeću fazu.</p></div>
      <div class="card"><b class="inum">06</b><h3>Videi, redom kojim ih gledaš</h3><p class="muted">Najviše 3 videa sa mog kanala i za svaki piše zašto i kada da ga pogledaš.</p></div>
    </div>
  </div>

  <div class="sec stack">
    <p class="eyebrow">Primer dela rezultata</p>
    <h2>Ovako izgleda kad ti upitnik pokaže kočnicu</h2>
    <div class="card stack iex">
      <div class="big"><small>Faza 3 od 9</small>Rasterećenje</div>
      <div class="phases" aria-hidden="true">${PHASE_NAMES.map((_,i)=>`<span class="${i<3?"past":i===3?"now":""}"></span>`).join("")}</div>
      <div class="phase-lbl"><span>Iskra</span><span>Nasleđe</span></div>
      <p class="eyebrow">Ključna kočnica</p>
      <h3>${esc(ex.brake)}</h3>
      <div class="act"><span class="n">01</span><div><b>${esc(step[0])}</b><p>${esc(step[1])}</p><p class="num">${esc(step[2])}</p></div></div>
      <div class="dont"><b>Za sada ne radi: </b>${esc(ex.dont)}</div>
    </div>
    <p class="muted" style="font-size:14px">Tvoj rezultat zavisi od tvojih odgovora. Pitanja i koraci su drugačiji ako radiš sam, imaš mali tim ili tim od 5 i više ljudi.</p>
  </div>

  <div class="sec stack">
    <p class="eyebrow">Kako radi</p>
    <h2>Tri koraka, oko 5 minuta</h2>
    <div class="steps3">
      <div><b>1</b><p><strong>Odgovoriš na 10 do 20 pitanja.</strong> Pitanja su situacije iz tvog posla, na primer šta bi se desilo da odeš na 7 dana. Biraš odgovor koji opisuje kako je sada, ne kako bi trebalo da bude.</p></div>
      <div><b>2</b><p><strong>Odmah vidiš svoju fazu i ključnu kočnicu.</strong> Upišeš ime i mejl da bismo ti poslali plan.</p></div>
      <div><b>3</b><p><strong>Plan stiže na mejl za oko 5 minuta.</strong> Dok čekaš, na stranici te čeka prvi video koji treba da pogledaš.</p></div>
    </div>
  </div>

  <div class="sec stack">
    <p class="eyebrow">Odakle ovo dolazi</p>
    <h2>Isti način rada koji koristim sa klijentima</h2>
    <p>Faze i pitanja su iz mog rada sa vlasnicima agencija, malih firmi i timova u većim kompanijama. Kad se radi na jednoj stvari dovoljno dugo, brojke se pomere:</p>
    <div class="stats">
      <div class="stat"><b>10 → 18</b><span>klijenata, bez novog zapošljavanja</span></div>
      <div class="stat"><b>70 → 40 h</b><span>rada vlasnika nedeljno</span></div>
      <div class="stat"><b>44% → 66%</b><span>marža iste firme</span></div>
      <div class="stat"><b>34 dana</b><span>ranija isporuka, Tetris tim</span></div>
    </div>
    ${startBtn("fsf-start2")}
  </div>`;
  document.getElementById("fsf-start").onclick = renderNext;
  document.getElementById("fsf-start2").onclick = renderNext;
}
function renderNext(){
  const q = nextQuestion();
  if (!q){ finish(); return; }
  const v = view(q);
  const done = Object.keys(answers).length, total = estTotal();
  app.innerHTML = `
  <div class="prog">
    <button class="back" id="fsf-back" ${history.length?"":"disabled"}>← Nazad</button>
    <div class="bar"><i style="width:${Math.round(done/total*100)}%"></i></div>
    <span class="mono">${done+1} / ~${total}</span>
  </div>
  <p class="q-area">${esc(v.area)}</p>
  <h2>${esc(v.q)}</h2>
  ${v.hint?`<p class="muted" style="margin-top:8px;font-size:15px">${esc(v.hint)}</p>`:""}
  <div class="opts">${v.o.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o.t)}</button>`).join("")}</div>`;
  app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    b.classList.add("sel"); answers[q.id] = +b.dataset.i; history.push(q.id);
    setTimeout(renderNext,160);
  });
  document.getElementById("fsf-back").onclick = ()=>{
    const last = history.pop(); delete answers[last];
    if (last==="solo") delete answers.team;
    if (last==="team" || last==="solo") for (const g of GATES) for (const x of g.qs) delete answers[x.id];
    renderNext();
  };
  top();
}
const STORE_KEY = "fsf_rezultat";
function save(r){ try{ localStorage.setItem(STORE_KEY, JSON.stringify({r, t:Date.now()})); }catch(e){} }
function load(){ try{ const x = JSON.parse(localStorage.getItem(STORE_KEY)||"null"); return x && x.r; }catch(e){ return null; } }

// GHL forma "FSF upitnik" ugrađena ispod rezultata. Skrivena polja dobijaju faza i r kroz adresu forme (Query Key).
function embedForm(el, phase){
  const id = CONFIG.FORM_ID;
  const p = new URLSearchParams({faza: slug(PHASE_NAMES[phase]), r: encode(), tim: teamLabel()});
  const f = document.createElement("iframe");
  f.src = "https://api.leadconnectorhq.com/widget/form/" + id + "?" + p.toString();
  f.id = "inline-" + id; f.title = "FSF upitnik";
  f.style.cssText = "width:100%;height:" + CONFIG.FORM_HEIGHT + "px;border:none;border-radius:0px";
  const attrs = {"data-layout":"{'id':'INLINE'}","data-trigger-type":"alwaysShow","data-trigger-value":"",
    "data-activation-type":"alwaysActivated","data-activation-value":"","data-deactivation-type":"neverDeactivate",
    "data-deactivation-value":"","data-form-name":"FSF upitnik","data-height":String(CONFIG.FORM_HEIGHT),
    "data-layout-iframe-id":"inline-" + id,"data-form-id":id,"data-cookie-consent":"true","data-cookie-consent-provider":"auto"};
  for (const k in attrs) f.setAttribute(k, attrs[k]);
  el.appendChild(f);
  // GHL skripta za visinu forme i preusmeravanje posle slanja; učitava se posle forme
  if (!document.querySelector('script[src*="form_embed.js"]')){
    const sc = document.createElement("script"); sc.src = "https://link.msgsndr.com/js/form_embed.js"; document.body.appendChild(sc);
  }
}

function finish(){
  const {phase} = computePhase();
  const r = encode();
  save(r);
  app.innerHTML = `<div class="stack"><p class="eyebrow">Gotovo</p><h2>Računam tvoj rezultat…</h2></div>`;
  // Ponovo učitaj stranicu sa ?faza=&r= da ih GHL forma upiše u skrivena polja (query key). Bez ličnih podataka.
  const p = new URLSearchParams(location.search);
  p.set("faza", slug(PHASE_NAMES[phase])); p.set("r", r);
  location.href = location.href.split("?")[0].split("#")[0] + "?" + p.toString();
}

/* ---------- korak 1, posle pitanja: faza + forma ---------- */
function renderTeaser(){
  const res = computePhase();
  if (!res){ answers = {}; history = []; renderIntro(); return; }
  const {phase} = res, R = resultFor(phase);
  app.innerHTML = `
  <div class="stack">
    <p class="eyebrow">Tvoj rezultat je spreman</p>
    <div class="big"><small>Faza ${phase} od 9</small>${esc(PHASE_NAMES[phase])}</div>
    <div class="phases" aria-hidden="true">${PHASE_NAMES.map((_,i)=>`<span class="${i<phase?"past":i===phase?"now":""}"></span>`).join("")}</div>
    <div class="card stack">
      <p class="eyebrow">Ključna kočnica ove faze</p>
      <h2>${esc(R.brake)}</h2>
    </div>
    <div class="formcta stack">
      <h3>Gde da pošaljem tvoj plan?</h3>
      <p style="font-size:15px">Upiši ime, mejl i telefon u formu ispod. Odmah posle toga vidiš šta te tačno zadržava u ovoj fazi, 3 koraka za narednih 30 dana i video koji treba prvi da pogledaš.</p>
    </div>
    <div id="fsf-form"></div>
  </div>`;
  embedForm(document.getElementById("fsf-form"), phase);
  top();
}

/* ---------- thank you: po uzoru na stranicu koja prodaje sledeći korak ---------- */
function renderResult(){
  const res = computePhase();
  if (!res){ renderBroken(); return; }
  const {phase} = res, name = PHASE_NAMES[phase];
  const main = pickVideos(phase)[0];
  const vid = CONFIG.MAIN_VIDEO_MP4 ? "" : (CONFIG.MAIN_VIDEO_ID || V[main[0]].id);
  const vtitle = CONFIG.MAIN_VIDEO_ID ? "Video" : V[main[0]].t;
  if (CONFIG.NON_ICP.includes(phase)){ renderPlanDownload(phase); return; }
  const P = CONFIG.PROGRAMS[seg()==="solo" ? "solo" : "team"];
  // Dokazi prema fazi: najviše 3 video testimonijala, pisane preporuke bez ljudi koji već imaju video
  const inPhase = x => (!x.phases || x.phases.includes(phase)) && (!x.segs || x.segs.includes(seg()));
  const order = (CONFIG.TESTIMONIAL_ORDER||{})[phase] || [];
  const TESTI = CONFIG.TESTIMONIALS.filter(t=>(t.mp4 || t.video) && inPhase(t))
    .sort((a,b)=>{ const ia=order.indexOf(a.video), ib=order.indexOf(b.video); return (ia<0?99:ia)-(ib<0?99:ib); }).slice(0,3);
  // Ista osoba samo jednom na stranici
  const shown = TESTI.map(t=>t.person||t.name);
  const once = x => { const who = x.person||x.name; if (!who) return true; if (shown.includes(who)) return false; shown.push(who); return true; };
  const PRACTICE = (CONFIG.PRACTICE_VIDEOS||[]).filter(inPhase).filter(once);
  const QUOTES = (CONFIG.QUOTES||[]).filter(inPhase).filter(once).slice(0,3);
  // Screenshotovi: link iz CONFIG ili slika ugrađena u thank you fajl (window.FSF_SHOTS, pravi ga napravi_th.py)
  const SHOTS = CONFIG.SCREENSHOTS.map((x,i)=>Object.assign({}, x, {src: x.src || (window.FSF_SHOTS||[])[i] || ""})).filter(x=>x.src);  // screenshotovi se ne ograničavaju po osobi
  const url = CONFIG.CTA_URL;
  const ctas = (id)=>`<div class="ctas">
      <a class="btn ctabig" href="${url}" target="_blank" rel="noopener" id="${id}">${esc(P.cta)}<small>Kratak razgovor od 20 minuta. Nije potreban da bi dobio plan.</small></a>
      ${CONFIG.ALT_URL?`<a class="alt" href="${CONFIG.ALT_URL}" target="_blank" rel="noopener">${esc(CONFIG.ALT_TEXT)}</a>`:""}
    </div>`;
  const faq = [
    ["Da li moram da zakažem razgovor da bih dobio plan?", "Ne. Plan ti stiže na mejl za oko 5 minuta, bez obzira na to da li zakažeš razgovor."],
    ["Šta se dešava na razgovoru?", `Za 20 minuta prođemo tvoje odgovore iz upitnika i proverimo da li je ${P.name} pravi sledeći korak za tebe. Ako nije, reći ću ti to i šta je bolje da uradiš sam.`],
    ["Šta ako sada nemam vremena?", "Upravo zato. Ako sve prolazi kroz tebe, vreme se neće pojaviti samo od sebe. Na razgovoru vidimo da li i kako može da se krene bez dodatnog opterećenja."],
    ["Šta ako nemam sređene brojke i podatke?", "To nije uslov. Sređivanje brojki je često deo prvog koraka, i na njemu radimo zajedno."],
    ["Da li je ovo za moju vrstu biznisa?", "Program je za uslužne biznise: agencije, konsultante, servise, edukacije i slično. Ako nisi siguran, to je prvo što proverimo na razgovoru."]
  ];
  app.innerHTML = `
  <div class="stack">
    <p class="ok"><i>✓</i> Potvrđeno: tvoj plan za fazu ${esc(name)} stiže na mejl za oko 5 minuta</p>
    <h1>Plan ti pokazuje gde si. Ovaj video pokazuje kako se odatle kreće.</h1>
    <p class="eyebrow">Pogledaj pre nego što otvoriš mejl</p>
    ${CONFIG.MAIN_VIDEO_MP4?`<div class="video glavni"><video src="${esc(CONFIG.MAIN_VIDEO_MP4)}" ${CONFIG.MAIN_VIDEO_POSTER?`poster="${esc(CONFIG.MAIN_VIDEO_POSTER)}"`:""} controls playsinline preload="metadata"></video></div>`:`<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${vid}?rel=0" title="${esc(vtitle)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`}
    ${url?ctas("fsf-cta1"):""}
  </div>

  <div class="sec stack">
    ${CONFIG.PHOTOS&&CONFIG.PHOTOS.bridge?`<img class="photo" src="${esc(CONFIG.PHOTOS.bridge)}" alt="Mapiranje procesa sa timom" loading="lazy">`:""}
    <p class="eyebrow">Od plana do sprovođenja</p>
    <h2>Plan ti kaže šta da središ. Program je mesto gde se to zaista sredi.</h2>
    <p>Većina vlasnika pročita plan, složi se sa njim, a u ponedeljak se vrati gašenju požara. Problem nije u znanju. Problem je što niko ne drži fokus na jednoj stvari dovoljno dugo da proradi.</p>
    <div class="cmp">
      <div class="card"><p class="eyebrow">Besplatno, u mejlu</p><h3>Tvoj plan za fazu ${esc(name)}</h3>
        <ul><li>U kojoj si fazi i šta te u njoj zadržava</li><li>3 koraka za narednih 30 dana</li><li>Šta za sada ne treba da radiš</li><li>Videi, redom kojim ih gledaš</li></ul></div>
      <div class="card hl"><p class="eyebrow">${esc(P.who)}</p><h3>${esc(P.name)}</h3>
        <ul>${P.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
    </div>
  </div>

  <div class="sec stack">
    ${CONFIG.PHOTOS&&CONFIG.PHOTOS.workshop?`<img class="photo" src="${esc(CONFIG.PHOTOS.workshop)}" alt="Radionica: stablo ciljeva" loading="lazy">`:""}
    <p class="eyebrow">Kako izgleda sledeći korak</p>
    <h2>Bez pompe. Samo rad na tvom biznisu.</h2>
    <div class="steps3">
      <div><b>1</b><p><strong>Razgovor od 20 minuta.</strong> Prođemo tvoje odgovore i proverimo da li je program pravi korak za tebe.</p></div>
      <div><b>2</b><p><strong>Mapiranje.</strong> Nađemo jedno ograničenje koje najviše koči biznis i izaberemo najviše 3 akcije.</p></div>
      <div><b>3</b><p><strong>Sprovođenje.</strong> Svake nedelje proveravamo šta je urađeno, šta pokazuju brojke i šta je sledeće.</p></div>
    </div>
  </div>

  <div class="sec stack">
    <p class="eyebrow">Rezultati iz prakse</p>
    <h2>Kad se radi na jednoj stvari dovoljno dugo</h2>
    <div class="stats">
      <div class="stat"><b>10 → 18</b><span>klijenata, bez novog zapošljavanja</span></div>
      <div class="stat"><b>44% → 66%</b><span>marža iste firme</span></div>
      <div class="stat"><b>70 → 40 h</b><span>rada vlasnika nedeljno</span></div>
      <div class="stat"><b>31 → 15</b><span>dana od upita do isporuke, u mom biznisu</span></div>
      ${phase>=5?`<div class="stat"><b>34 dana</b><span>ranija isporuka, Tetris tim u playStudios</span></div>
      <div class="stat"><b>+23%</b><span>brža isporuka istog tima</span></div>`:""}
    </div>
    ${phase>=5?(CONFIG.PHOTOS&&CONFIG.PHOTOS.tetris)?`<img class="photo" src="${esc(CONFIG.PHOTOS.tetris)}" alt="Tetris tim, playStudios" loading="lazy">`:"":""}
    ${CONFIG.CASE_STUDY_ID && CONFIG.CASE_STUDY_ID!==vid?`<div class="stack"><h3>Pogledaj kako je to izgledalo u jednoj firmi</h3>
      <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${CONFIG.CASE_STUDY_ID}?rel=0" title="Studija slučaja" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <p class="muted" style="font-size:14px">Studija slučaja, 44 minuta: šta smo menjali, kojim redom i šta su pokazale brojke.</p></div>`:""}
    ${PRACTICE.length?`<div class="tgrid vids">${PRACTICE.map(p=>`<div class="tcard"><div class="video vert"><iframe src="https://www.youtube-nocookie.com/embed/${esc(p.video)}?rel=0" title="${esc(p.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="tb"><b>${esc(p.title)}</b></div></div>`).join("")}</div>`:""}
  </div>

  ${TESTI.length?`<div class="sec stack">
    <p class="eyebrow">Vlasnici koji su radili sa mnom</p>
    <h2>Šta kažu posle saradnje</h2>
    <div class="tgrid vids">${TESTI.map(t=>`<div class="tcard">
      ${t.mp4?`<video class="tv${t.vertical?" vert":""}" src="${esc(t.mp4)}" ${t.poster?`poster="${esc(t.poster)}"`:""} controls playsinline preload="metadata"></video>`:""}
      ${t.video?`<div class="video${t.vertical?" vert":""}"><iframe src="https://www.youtube-nocookie.com/embed/${esc(t.video)}?rel=0" title="${esc(t.name)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`:""}
      <div class="tb">${t.quote?`<q>${esc(t.quote)}</q>`:""}<b>${esc(t.name||"")}</b><span>${esc(t.role||"")}</span></div></div>`).join("")}</div>
  </div>`:""}

  ${QUOTES.length?`<div class="sec stack">
    <p class="eyebrow">Šta kažu lideri sa kojima sam radio</p>
    <h2>Praktični alati, merljive promene</h2>
    <div class="tgrid">${QUOTES.map(q=>`<div class="tcard"><div class="tb"><q>${esc(q.text)}</q><b>${esc(q.name)}</b><span>${esc(q.role)}</span></div></div>`).join("")}</div>
  </div>`:""}

  ${SHOTS.length?`<div class="sec stack">
    <p class="eyebrow">Poruke klijenata</p>
    <h2>Iz razgovora sa vlasnicima, bez ulepšavanja</h2>
    <div class="shots">${SHOTS.map(x=>`<img src="${esc(x.src)}" alt="${esc(x.alt||"Poruka klijenta")}" loading="lazy">`).join("")}</div>
  </div>`:""}

  ${CONFIG.ABOUT_VIDEO||CONFIG.ABOUT_TEXT?`<div class="sec stack">
    <p class="eyebrow">Ko sam ja</p>
    <h2>Stefan Stojković, Futurist Systems</h2>
    <div class="about">
      ${CONFIG.ABOUT_VIDEO?`<div class="video vert"><iframe src="https://www.youtube-nocookie.com/embed/${esc(CONFIG.ABOUT_VIDEO)}?rel=0" title="Stefan Stojković" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`:""}
      <div class="stack">${(CONFIG.ABOUT_TEXT||[]).map(p=>`<p>${esc(p)}</p>`).join("")}
        ${(CONFIG.ABOUT_FACTS||[]).length?`<div class="stats facts">${CONFIG.ABOUT_FACTS.map(f=>`<div class="stat"><b>${esc(f[0])}</b><span>${esc(f[1])}</span></div>`).join("")}</div>`:""}</div>
    </div>
    ${CONFIG.PHOTOS&&CONFIG.PHOTOS.about?`<img class="photo full" src="${esc(CONFIG.PHOTOS.about)}" alt="Stefan na konferenciji" loading="lazy">`:""}
  </div>`:""}

  <div class="sec stack">
    <p class="eyebrow">Pitanja koja čujem na svakom razgovoru</p>
    <h2>Odgovori pre nego što zakažeš</h2>
    <div>${faq.map(q=>`<details><summary>${esc(q[0])}</summary><p>${esc(q[1])}</p></details>`).join("")}</div>
  </div>

  ${url?`<div class="sec stack endcta">${CONFIG.PHOTOS&&CONFIG.PHOTOS.cta?`<img class="photo" src="${esc(CONFIG.PHOTOS.cta)}" alt="Stefan na radionici" loading="lazy">`:""}<h2>Hoćeš da zajedno nađemo jednu stvar koja najviše koči tvoj biznis?</h2>${ctas("fsf-cta2")}</div>`:""}
  <p class="muted" style="font-size:13px;margin-top:24px">Ako mejl sa planom ne stigne za 10 minuta, pogledaj folder Promocije ili Spam.</p>`;
  top();
}
// Van ciljne grupe: plan se preuzima odmah, bez mejla i bez poziva na program
function renderPlanDownload(phase){
  const name = PHASE_NAMES[phase], pdf = CONFIG.PLAN_URLS[phase];
  app.innerHTML = `
  <div class="stack">
    <p class="ok"><i>✓</i> Tvoj plan za fazu ${esc(name)} je spreman</p>
    <h1>Preuzmi svoj plan i kreni od prvog koraka</h1>
    <p>U planu je u kojoj je fazi tvoj biznis i šta ga u njoj najčešće zadržava, 3 koraka za narednih 30 dana raspoređena po nedeljama, šabloni koje možeš odmah da koristiš i provera spremnosti za narednu fazu.</p>
    ${pdf?`<div class="ctas"><a class="btn ctabig" href="${pdf}" target="_blank" rel="noopener" download>Preuzmi plan (PDF)<small>Sačuvaj ga, za 30 dana ćeš se vratiti na proveru spremnosti.</small></a></div>`:`<p class="note">Link ka PDF planu još nije podešen (PLAN_URLS u CONFIG).</p>`}
  </div>`;
  top();
}

function renderBroken(){
  const href = CONFIG.QUIZ_URL || "#";
  app.innerHTML = `<div class="stack"><p class="eyebrow">Hvala!</p><h2>Plan ti stiže na mejl</h2><p class="muted">Ovde ne vidimo tvoje odgovore (verovatno je upitnik rađen na drugom uređaju ili pregledaču).</p>${CONFIG.QUIZ_URL?`<div><a class="btn" href="${esc(href)}">Prođi upitnik ponovo</a></div>`:""}</div>`;
}

/* ---------- start ---------- */
const params = new URLSearchParams(location.search);
if (root.dataset.step === "th"){
  // prvo ?r= iz redirect linka, pa sačuvan rezultat u pregledaču (ako r fali ili nije ispravan)
  const a = decode(params.get("r") || "") || decode(load() || "");
  if (a){ answers = a; renderResult(); } else renderBroken();
} else {
  const a = params.get("r") && decode(params.get("r"));
  if (a){ answers = a; save(params.get("r")); renderTeaser(); }
  else renderIntro();
}
})();
