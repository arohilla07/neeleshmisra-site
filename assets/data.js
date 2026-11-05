/* All site content lives here so it can be edited in one place and, later,
   moved into WordPress custom post types (songs, films, books, shows).
   yt = YouTube video id (11 chars). Leave "" when unknown: the page then
   links to a YouTube search instead of embedding. */
window.NM = {
  person: {
    name: "Neelesh Misra",
    hindi: "नीलेश मिसरा",
    born: "4 May 1973, Lucknow",
    email: "neeleshmisraoffice@gaonconnection.com",
    address: "Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    enquiry: "https://41svr5.share-na2.hsforms.com/2yKttTuDqRIm1S34A2dU-Ng",
    workWithUs: "https://41svr5.share-na2.hsforms.com/2f6pZw1dbTRm4RXybywaM0w",
    whatsapp: "https://api.whatsapp.com/send?phone=916393700123",
    social: {
      YouTube: "https://www.youtube.com/@NeeleshMisra",
      Instagram: "https://www.instagram.com/neeleshmisra/",
      X: "https://twitter.com/neeleshmisra",
      Facebook: "https://www.facebook.com/TheNeeleshMisraPage",
      LinkedIn: "https://www.linkedin.com/in/neeleshmisra/",
      "Slow Music": "https://www.youtube.com/@slowmusicbyneeleshmisra"
    }
  },

  /* Film songs as lyricist (source: neeleshmisra.com/about-us). */
  filmSongs: [
    { t: "Jaadu Hai Nasha Hai", h: "जादू है नशा है", film: "Jism", y: 2003 },
    { t: "Chalo Tumko Lekar Chalein", h: "चलो तुमको लेकर चलें", film: "Jism", y: 2003 },
    { t: "Bepanah Pyaar Hai", h: "बेपनाह प्यार है", film: "Krishna Cottage", y: 2004 },
    { t: "Maine Dil Se Kaha", h: "मैंने दिल से कहा", film: "Rog", y: 2005, music: "M.M. Kreem", singer: "K.K.", label: "Saregama" },
    { t: "Khoobsoorat Hai Woh Itna", h: "ख़ूबसूरत है वो इतना", film: "Rog", y: 2005 },
    { t: "Guzar Na Jaaye", h: "गुज़र न जाए", film: "Rog", y: 2005 },
    { t: "Kya Mujhe Pyaar Hai", h: "क्या मुझे प्यार है", film: "Woh Lamhe", y: 2006 },
    { t: "Lamha Lamha", h: "लम्हा लम्हा", film: "Gangster", y: 2006 },
    { t: "Khwahishon Se", h: "ख़्वाहिशों से", film: "Holiday", y: 2006 },
    { t: "Tu Hai Bhatakta Jugnu Koi", h: "तू है भटकता जुगनू कोई", film: "Holiday", y: 2006 },
    { t: "Neele Neele Aasmaan Tale", h: "नीले नीले आसमाँ तले", film: "Holiday", y: 2006 },
    { t: "Bolo Na Tum Zara", h: "बोलो ना तुम ज़रा", film: "Fight Club: Members Only", y: 2006 },
    { t: "Gulon Mein Rang Bhare", h: "गुलों में रंग भरे", film: "Sikandar", y: 2009, note: "A modern reading of Faiz Ahmed Faiz's poem." },
    { t: "I Am in Love", h: "आई ऍम इन लव", film: "Once Upon A Time in Mumbaai", y: 2010 },
    { t: "Anjaana Anjaani Ki Kahani", h: "अंजाना अंजानी की कहानी", film: "Anjaana Anjaani", y: 2010 },
    { t: "Abhi Kuch Dinon Se", h: "अभी कुछ दिनों से", film: "Dil Toh Baccha Hai Ji", y: 2011 },
    { t: "Humko Pyaar Hua", h: "हमको प्यार हुआ", film: "Ready", y: 2011 },
    { t: "I Love You", h: "आई लव यू", film: "Bodyguard", y: 2011 },
    { t: "Dil Mera Muft Ka", h: "दिल मेरा मुफ़्त का", film: "Agent Vinod", y: 2012 },
    { t: "Khudaaya", h: "ख़ुदाया", film: "Shanghai", y: 2012 },
    { t: "Banjaara", h: "बंजारा", film: "Ek Tha Tiger", y: 2012 },
    { t: "Kyon", h: "क्यों", film: "Barfi!", y: 2012 },
    { t: "Dhichkyaaon Doom Doom", h: "ढिचक्याऊँ डूम डूम", film: "Chashme Baddoor", y: 2013 },
    { t: "Ishq Mohallah", h: "इश्क़ मोहल्ला", film: "Chashme Baddoor", y: 2013 },
    { t: "Aala Re Aala", h: "आला रे आला", film: "Shootout at Wadala", y: 2013 },
    { t: "Capuchino", h: "कैपुचीनो", film: "I, Me Aur Main", y: 2013 },
    { t: "Zindagi (Reprise)", h: "ज़िंदगी", film: "Bajrangi Bhaijaan", y: 2015 },
    { t: "Jhumritalaiyya", h: "झुमरीतलैया", film: "Jagga Jasoos", y: 2017 },
    { t: "Phire Faqeera", h: "फिरे फ़क़ीरा", film: "Pagglait", y: 2021 },
    { t: "Thode Kam Ajnabi", h: "थोड़े कम अजनबी", film: "Pagglait", y: 2021 },
    { t: "Eeja", h: "ईजा", film: "", y: 2025 },
    { t: "Mann Ye Mera", h: "मन ये मेरा", film: "Metro… In Dino", y: 2025 }
  ],

  /* His own songs on Slow Music (written and sung by him). */
  ownSongs: [
    { t: "Zindagi 1.0", h: "ज़िंदगी 1.0", film: "Kood", y: 2026, note: "First track from Kood. Written, composed and sung by Neelesh Misra.", yt: "" },
    { t: "Tum Kaho Chaand Choukor Kar Den", h: "तुम कहो चाँद चौकोर कर दें", y: 2025, note: "Slow Music's first music video, from his debut solo album as a singer.", yt: "" },
    { t: "Dheeme Dheeme", h: "धीमे धीमे", y: 2025, yt: "" },
    { t: "Bhar Aayin Aankhen Meri", h: "भर आईं आँखें मेरी", y: 2025, yt: "" },
    { t: "Chamba Kitni Door", h: "चंबा कितनी दूर", y: 2025, yt: "" },
    { t: "Din Doobe", h: "दिन डूबे", y: 2025, yt: "" },
    { t: "Ehi Thaiyyan: A Bhojpuri Chaiti", h: "एहि ठइयाँ", y: 2025, yt: "" },
    { t: "'Ka Kha Ga' Ki Cool Kahaani", h: "क ख ग की कूल कहानी", y: 2025, note: "His mother Nirmala Misra's folk song, conceptualised by Neelesh under The Slow Movement.", yt: "" }
  ],

  kood: {
    title: "Kood", hindi: "कूद", kind: "Mini feature", y: 2026, runtime: "40 min",
    credit: "Written and directed by Neelesh Misra",
    cast: "Neelesh Misra, Ketaki Kulkarni",
    producer: "Yamini Misra · Slow Motion Pictures",
    logline: "Two strangers meet on a bridge at the edge of a city. Both have come there to end their lives. Over one long day, they begin to see each other.",
    film: "", trailer: "", teaser: "",
    banner: "https://staticimg.publishstory.co/thumb/125381020.cms?imgsize=1429411&width=1280&height=720&resizemode=4"
  },

  radio: [
    { t: "Yaadon Ka Idiot Box", h: "यादों का इडियट बॉक्स", where: "92.7 BIG FM, then digital", y: "2011 –", body: "The show that made a country switch on the radio at night. Stories set in Yaad Sheher, a small town of memory, told in Neelesh's voice and written by a 'mandli' of writers he trained. Now in its seventh season." },
    { t: "The Neelesh Misra Show", h: "द नीलेश मिसरा शो", where: "Red FM", y: "2016", body: "A nightly hour of stories and songs on Red FM." },
    { t: "Kahaani Express", h: "कहानी एक्सप्रेस", where: "Digital", y: "2018 –", body: "A storytelling platform for many writers, with stories curated and narrated by Neelesh." },
    { t: "Yaad Sheher", h: "याद शहर", where: "Storytelling show", y: "", body: "Short stories from the town where every memory lives." }
  ],

  episodes: [
    { t: "Mohar", by: "Anulata Raj Nair", show: "YKIB Season 7", d: "17:34" },
    { t: "Naana Naani Park", by: "Divya Prakash", show: "YKIB Season 7", d: "18:58" },
    { t: "Moni Maa", by: "Gargee Vidyant", show: "YKIB Season 7", d: "24:52" },
    { t: "Mangnu Ki Photo", by: "Jaya Anand", show: "YKIB Season 7", d: "22:22" },
    { t: "Pyaar Waali Shart", by: "Deeksha Choudhary", show: "YKIB Season 7", d: "22:09" },
    { t: "Meethi Ka Ghar", by: "Harsha Shri", show: "YKIB Season 7", d: "21:53" },
    { t: "Bajbahadur Batukelvi", by: "Deepak Heera Rangnath", show: "YKIB Season 7", d: "23:25" },
    { t: "Bitter Corner", by: "Anulata Raj Nair", show: "Yaadon Ka Idiot Box", d: "21:07", yt: "" },
    { t: "Ek Din Wo Mili", by: "Anulata Raj Nair", show: "Kahaniyan Sunaata Hun", d: "42:20" },
    { t: "Chand Aur Saba Ka Ishq", by: "Anulata Raj Nair", show: "Kahaniyan Sunaata Hun", d: "25:37" },
    { t: "Mujhe Chhod Na Jaana", by: "Smriti Sachdeva", show: "Kahaniyan Sunaata Hun", d: "24:35" },
    { t: "Puru Ki Holi", by: "Deepak Heera Rangnath", show: "Stories", d: "22:43" },
    { t: "Fauji Ki Diary", by: "Anulata Raj Nair", show: "Stories", d: "21:21" },
    { t: "Jhola Bhar Khushiyaan", by: "Ayush Tiwari", show: "Stories", d: "17:56" },
    { t: "Ek Lamha Khushi Ka", by: "Anu Singh", show: "Stories", d: "18:52" },
    { t: "Run Out (Part 1)", by: "", show: "Yaad Sheher", d: "6:12" }
  ],

  books: [
    { t: "Main Aksar Sochta Hoon", h: "मैं अक्सर सोचता हूँ", pub: "Slow Imprint", cat: "Poetry", y: 2025, c1: "#d41f26", c2: "#f6e7d8", blurb: "His first book of poems. Dainik Jagran Hindi Bestseller 2025 (poetry) and the Dainik Jagran Kriti Samman." },
    { t: "Neelesh Misra Ka Yaad Sheher, Vol. 2", h: "नीलेश मिसरा का याद शहर", pub: "", cat: "Stories", y: null, c1: "#1f3a5f", c2: "#e8eef5", blurb: "More stories from the town of memory, the world of Yaadon Ka Idiot Box." },
    { t: "Neelesh Misra Ka Yaad Sheher, Vol. 1", h: "नीलेश मिसरा का याद शहर", pub: "", cat: "Stories", y: null, c1: "#2f5d50", c2: "#e6f0ea", blurb: "The first collection of Yaadon Ka Idiot Box stories, written for the page." },
    { t: "Gaon Se Bees Postcards", h: "गाँव से बीस पोस्टकार्ड", pub: "Slow Imprint", cat: "Letters", y: null, by: "Dr. Shiv Balak Misra", c1: "#8a5a2b", c2: "#f3ead9", blurb: "Twenty postcards from the village by his father, Dr. Shiv Balak Misra. Published by Neelesh's Slow Imprint." },
    { t: "173 Hours in Captivity", h: "", pub: "HarperCollins", cat: "Non-fiction", y: 2000, c1: "#161616", c2: "#e9e9e6", blurb: "The first full account of the IC-814 hijacking, written while he was a young reporter." }
  ],

  articles: [
    { t: "Neelesh Misra: The Lyricist Behind India's Most Beloved Songs", by: "Anshika Dixit" },
    { t: "Storytelling in the Age of AI: What Neelesh Misra Thinks", by: "" },
    { t: "The Joint Family Was India's Original Wellness System, and We Dismantled It", by: "", d: "8 Jun 2026" },
    { t: "The Essence of Slow Living: Memories of Nani Ka Ghar", by: "", d: "5 May 2026" },
    { t: "Neelesh Misra's Kood: What the Makers Have to Say", by: "" }
  ],

  interviews: [
    { t: "Ayushmann Khurrana", sub: "Punishment Room", d: "7:20", yt: "" },
    { t: "Satinder Sartaaj", sub: "At The Slow Interview", d: "5:31", yt: "" },
    { t: "Alakh Pandey", sub: "Physics Wallah", d: "2:00:54", yt: "" },
    { t: "Divya Dutta", sub: "The story behind Chiraiya's biggest star", d: "", yt: "" },
    { t: "Aditya Ghosh", sub: "A Slow Day with Neelesh Misra · Akasa Air", d: "1:54:44", yt: "" },
    { t: "Looking Back", sub: "The best of the first three seasons", d: "2:01:00", yt: "" },
    { t: "Manoj Bajpayee", sub: "Short", d: "", yt: "" },
    { t: "Arbaaz Khan & Salim Khan", sub: "Tattoo", d: "", yt: "" }
  ],

  journalism: [
    { y: "1995", t: "Starts at India Abroad", b: "A New York–based newspaper. Then the Associated Press." },
    { y: "1996", t: "Charkhi Dadri mid-air collision", b: "Reports the deadliest mid-air collision in aviation history." },
    { y: "1990s", t: "Bofors, Chandraswami and P. V. Narasimha Rao", b: "Investigations that ran across the decade." },
    { y: "1999", t: "Kargil War", b: "From the front." },
    { y: "1999", t: "Odisha Super Cyclone", b: "" },
    { y: "1999–2000", t: "IC-814 hijacking", b: "Becomes the book 173 Hours in Captivity (HarperCollins, 2000)." },
    { y: "2004", t: "Indian Ocean tsunami", b: "Reports from the Andaman and Nicobar Islands." },
    { y: "", t: "Senior Roving Editor, Hindustan Times", b: "" },
    { y: "2012", t: "Founds Gaon Connection", b: "A rural newspaper, launched from Kunaura village near Lucknow, that grows into India's largest rural media platform." }
  ],

  awards: [
    "Ramnath Goenka Award for Excellence in Journalism",
    "Karpoor Chandra Kulish Memorial Award",
    "Dainik Jagran Kriti Samman, for Main Aksar Sochta Hoon (Hindi Bestseller 2025, poetry)"
  ]
};
