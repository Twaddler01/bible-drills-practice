// Override console.log, console.warn, and console.error for exporting into a file
function logExport() {
    var logs = [];
    const originalConsoleLog = console.log;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;

    console.log = function (message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        logs.push(`LOG: ${message}`);
        originalConsoleLog(message);
    };

    console.warn = function (message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        logs.push(`WARNING: ${message}`);
        originalConsoleWarn(message);
    };

    console.error = function (message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        logs.push(`ERROR: ${message}`);
        originalConsoleError(message);
    };

    let exportButton = document.createElement('button');
    exportButton.id = 'exportButton';
    exportButton.innerHTML = 'Export Logs';
    document.body.appendChild(exportButton);

    exportButton.addEventListener("click", function () {
        // Save logs to a file
        let logString = logs.join('\n');

        // Create a Blob containing the text data
        const blob = new Blob([logString], { type: 'text/plain' });

        // Create a download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'logs.txt';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
}

// Allow exporting of HTML to inspect/debug elements
function htmlExport() {
    // Create the "Export HTML" button
    const exportHTMLButton = document.createElement('button');
    exportHTMLButton.id = 'exportHTMLButton';
    exportHTMLButton.textContent = 'Export HTML';
    
    // Append the button to the document body
    document.body.appendChild(exportHTMLButton);
    
    // Add an event listener to the "Export HTML" button
    exportHTMLButton.addEventListener("click", function () {
        // Get the HTML content of the entire document
        let htmlContent = document.documentElement.outerHTML;
    
        // Create a Blob containing the HTML content
        const blob = new Blob([htmlContent], { type: 'text/html' });
    
        // Create a download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'vsim_page.html';
    
        // Append the link to the document
        document.body.appendChild(link);
    
        // Trigger the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
    });
}

// START FUNCTIONS
logExport();
htmlExport();

// VARIABLES
// Completion Call
const bibleVerses = [ 
// BLUE KJV
    { verse_ul: 'And God saw every thing', verse: ' that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.', ref: 'Genesis 1:31', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Every man shall give as he is able', verse: ', according to the blessing of the LORD thy God which he hath given thee.', ref: 'Deuteronomy 16:17', color: 'blue', vers: 'kjv' },
    { verse_ul: 'And the people said unto Joshua', verse: ', The LORD our God will we serve, and his voice will we obey.', ref: 'Joshua 24:24', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Sing unto him, sing psalms', verse: ' unto him, talk ye of all his wondrous works.', ref: '1 Chronicles 16:9', color: 'blue', vers: 'kjv' },
    { verse_ul: 'What time I am afraid', verse: ', I will trust in thee.', ref: 'Psalm 56:3', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Thy word have I hid', verse: ' in mine heart, that I might not sin against thee.', ref: 'Psalm 119:11', color: 'blue', vers: 'kjv' },
    { verse_ul: 'A good name', verse: ' is rather to be chosen than great riches, and loving favour rather than silver and gold.', ref: 'Proverbs 22:1', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Also I heard the voice', verse: ' of the LORD, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.', ref: 'Isaiah 6:8', color: 'blue', vers: 'kjv' },
    { verse_ul: 'I am the LORD', verse: ', and there is none else, there is no God beside me: I girded thee, though thou hast not known me:', ref: 'Isaiah 45:5', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Bring ye all the tithes', verse: ' into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.', ref: 'Malachi 3:10', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Go ye therefore, and teach all nations', verse: ', baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.', ref: 'Matthew 28:19-20', color: 'blue', vers: 'kjv' },
    { verse_ul: 'And Jesus increased', verse: ' in wisdom and stature, and in favour with God and man.', ref: 'Luke 2:52', color: 'blue', vers: 'kjv' },
    { verse_ul: 'For the Son of man', verse: ' is come to seek and to save that which was lost.', ref: 'Luke 19:10', color: 'blue', vers: 'kjv' },
    { verse_ul: 'God is a Spirit:', verse: ' and they that worship him must worship him in spirit and in truth.', ref: 'John 4:24', color: 'blue', vers: 'kjv' },
    { verse_ul: 'By this shall all men know', verse: ' that ye are my disciples, if ye have love one to another.', ref: 'John 13:35', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Neither is there salvation in any other:', verse: ' for there is none other name under heaven given among men, whereby we must be saved.', ref: 'Acts 4:12', color: 'blue', vers: 'kjv' },
    { verse_ul: 'That if thou shalt confess with thy mouth the Lord Jesus', verse: ', and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.', ref: 'Romans 10:9', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Know ye not', verse: ' that ye are the temple of God, and that the Spirit of God dwelleth in you?', ref: '1 Corinthians 3:16', color: 'blue', vers: 'kjv' },
    { verse_ul: 'For by grace', verse: ' are ye saved through faith; and that not of yourselves: it is the gift of God:', ref: 'Ephesians 2:8', color: 'blue', vers: 'kjv' },
    { verse_ul: 'In every thing give thanks:', verse: ' for this is the will of God in Christ Jesus concerning you.', ref: '1 Thessalonians 5:18', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Let no man despise', verse: ' thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.', ref: '1 Timothy 4:12', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Study to shew', verse: ' thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.', ref: '2 Timothy 2:15', color: 'blue', vers: 'kjv' },
    { verse_ul: 'But be ye doers', verse: ' of the word, and not hearers only, deceiving your own selves.', ref: 'James 1:22', color: 'blue', vers: 'kjv' },
    { verse_ul: 'Use hospitality', verse: ' one to another without grudging.', ref: '1 Peter 4:9', color: 'blue', vers: 'kjv' },
    { verse_ul: 'And this commandment have we from him', verse: ', That he who loveth God love his brother also.', ref: '1 John 4:21', color: 'blue', vers: 'kjv' },
// BLUE CSB
    { verse_ul: 'God saw all', verse: ' that he had made, and it was very good indeed. Evening came and then morning: the sixth day.', ref: 'Genesis 1:31', color: 'blue', vers: 'csb' },
    { verse_ul: 'Everyone must appear with a gift suited to his means', verse: ', according to the blessing the lord your God has given you.', ref: 'Deuteronomy 16:17', color: 'blue', vers: 'csb' },
    { verse_ul: 'So the people said to Joshua', verse: ', “We will worship the lord our God and obey him.”', ref: 'Joshua 24:24', color: 'blue', vers: 'csb' },
    { verse_ul: 'Sing to him; sing praise', verse: ' to him; tell about all his wondrous works!', ref: '1 Chronicles 16:9', color: 'blue', vers: 'csb' },
    { verse_ul: 'When I am afraid', verse: ', I will trust in you.', ref: 'Psalm 56:3', color: 'blue', vers: 'csb' },
    { verse_ul: 'I have treasured your word', verse: ' in my heart so that I may not sin against you.', ref: 'Psalm 119:11', color: 'blue', vers: 'csb' },
    { verse_ul: 'A good name', verse: ' is to be chosen over great wealth; favor is better than silver and gold.', ref: 'Proverbs 22:1', color: 'blue', vers: 'csb' },
    { verse_ul: 'Then I heard the voice', verse: ' of the Lord asking: Who will I send? Who will go for us? I said: Here I am. Send me.', ref: 'Isaiah 6:8', color: 'blue', vers: 'csb' },
    { verse_ul: 'I am the Lord', verse: ', and there is no other; there is no God but me. I will strengthen you, though you do not know me,', ref: 'Isaiah 45:5', color: 'blue', vers: 'csb' },
    { verse_ul: 'Bring the full tenth', verse: ' into the storehouse so that there may be food in my house. Test me in this way,” says the lord of Armies. “See if I will not open the floodgates of heaven and pour out a blessing for you without measure.', ref: 'Malachi 3:10', color: 'blue', vers: 'csb' },
    { verse_ul: 'Go, therefore, and make disciples of all nations', verse: ', baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember, I am with you always, to the end of the age.”', ref: 'Matthew 28:19-20', color: 'blue', vers: 'csb' },
    { verse_ul: 'And Jesus increased', verse: ' in wisdom and stature, and in favor with God and with people.', ref: 'Luke 2:52', color: 'blue', vers: 'csb' },
    { verse_ul: 'For the Son of Man', verse: ' has come to seek and to save the lost.”', ref: 'Luke 19:10', color: 'blue', vers: 'csb' },
    { verse_ul: 'God is spirit', verse: ', and those who worship him must worship in Spirit and in truth.”', ref: 'John 4:24', color: 'blue', vers: 'csb' },
    { verse_ul: 'By this everyone will know', verse: ' that you are my disciples, if you love one another.”', ref: 'John 13:35', color: 'blue', vers: 'csb' },
    { verse_ul: 'There is salvation in no one else', verse: ', for there is no other name under heaven given to people by which we must be saved.”', ref: 'Acts 4:12', color: 'blue', vers: 'csb' },
    { verse_ul: 'If you confess with your mouth', verse: ', “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved.', ref: 'Romans 10:9', color: 'blue', vers: 'csb' },
    { verse_ul: 'Don’t you yourselves know', verse: ' that you are God’s temple and that the Spirit of God lives in you?', ref: '1 Corinthians 3:16', color: 'blue', vers: 'csb' },
    { verse_ul: 'For you are saved by grace', verse: ' through faith, and this is not from yourselves; it is God’s gift –', ref: 'Ephesians 2:8', color: 'blue', vers: 'csb' },
    { verse_ul: 'Give thanks in everything;', verse: ' for this is God’s will for you in Christ Jesus.', ref: '1 Thessalonians 5:18', color: 'blue', vers: 'csb' },
    { verse_ul: 'Don’t let anyone despise your youth', verse: ', but set an example for the believers in speech, in conduct, in love, in faith, and in purity.', ref: '1 Timothy 4:12', color: 'blue', vers: 'csb' },
    { verse_ul: 'Be diligent to present', verse: ' yourself to God as one approved, a worker who doesn’t need to be ashamed, correctly teaching the word of truth.', ref: '2 Timothy 2:15', color: 'blue', vers: 'csb' },
    { verse_ul: 'But be doers', verse: ' of the word and not hearers only, deceiving yourselves.', ref: 'James 1:22', color: 'blue', vers: 'csb' },
    { verse_ul: 'Be hospitable', verse: ' to one another without complaining.', ref: '1 Peter 4:9', color: 'blue', vers: 'csb' },
    { verse_ul: 'And we have this command from him:', verse: ' The one who loves God must also love his brother and sister.', ref: '1 John 4:21', color: 'blue', vers: 'csb' },
// GREEN KJV
    { verse_ul: 'In the beginning', verse: ' God created the heaven and the earth.', ref: 'Genesis 1:1', color: 'green', vers: 'kjv' },
    { verse_ul: 'Honour thy father', verse: ' and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.', ref: 'Exodus 20:12', color: 'green', vers: 'kjv' },
    { verse_ul: 'This is the day which the Lord hath made;', verse: ' we will rejoice and be glad in it.', ref: 'Psalm 118:24', color: 'green', vers: 'kjv' },
    { verse_ul: 'Thy word is a lamp unto my feet', verse: ', and a light unto my path.', ref: 'Psalm 119:105', color: 'green', vers: 'kjv' },
    { verse_ul: 'Trust in the Lord with all thine heart;', verse: ' and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.', ref: 'Proverbs 3:5-6', color: 'green', vers: 'kjv' },
    { verse_ul: 'A soft answer turneth away wrath:', verse: ' but grievous words stir up anger.', ref: 'Proverbs 15:1', color: 'green', vers: 'kjv' },
    { verse_ul: 'For unto us a child is born, unto us a son is given:', verse: ' and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.', ref: 'Isaiah 9:6', color: 'green', vers: 'kjv' },
    { verse_ul: 'The grass withereth', verse: ', the flower fadeth: but the word of our God shall stand for ever.', ref: 'Isaiah 40:8', color: 'green', vers: 'kjv' },
    { verse_ul: 'The Lord is good', verse: ', a strong hold in the day of trouble; and he knoweth them that trust in him.', ref: 'Nahum 1:7', color: 'green', vers: 'kjv' },
    { verse_ul: 'Then saith Jesus unto him, Get thee hence, Satan: for it is written', verse: ', Thou shalt worship the Lord thy God, and him only shalt thou serve.', ref: 'Matthew 4:10', color: 'green', vers: 'kjv' },
    { verse_ul: 'Let your light so shine', verse: ' before men, that they may see your good works, and glorify your Father which is in heaven.', ref: 'Matthew 5:16', color: 'green', vers: 'kjv' },
    { verse_ul: 'Judge not, and ye shall not be judged:', verse: ' condemn not, and ye shall not be condemned: forgive, and ye shall be forgiven.', ref: 'Luke 6:37', color: 'green', vers: 'kjv' },
    { verse_ul: 'And I say unto you, Ask, and it shall be given you;', verse: ' seek, and ye shall find; knock, and it shall be opened unto you.', ref: 'Luke 11:9', color: 'green', vers: 'kjv' },
    { verse_ul: 'For God so loved the world', verse: ', that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', ref: 'John 3:16', color: 'green', vers: 'kjv' },
    { verse_ul: 'This is my commandment', verse: ', That ye love one another, as I have loved you.', ref: 'John 15:12', color: 'green', vers: 'kjv' },
    { verse_ul: 'And they said, Believe on the Lord Jesus Christ', verse: ', and thou shalt be saved, and thy house.', ref: 'Acts 16:31', color: 'green', vers: 'kjv' },
    { verse_ul: 'I beseech you therefore, brethren, by the mercies of God', verse: ', that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.', ref: 'Romans 12:1', color: 'green', vers: 'kjv' },
    { verse_ul: 'And we know that all things work together for good', verse: ' to them that love God, to them who are the called according to his purpose.', ref: 'Romans 8:28', color: 'green', vers: 'kjv' },
    { verse_ul: 'Moreover it is required', verse: ' in stewards, that a man be found faithful.', ref: '1 Corinthians 4:2', color: 'green', vers: 'kjv' },
    { verse_ul: 'And be ye kind one to another, tenderhearted', verse: ', forgiving one another, even as God for Christ’s sake hath forgiven you.', ref: 'Ephesians 4:32', color: 'green', vers: 'kjv' },
    { verse_ul: 'And whatsoever ye do', verse: ', do it heartily, as to the Lord, and not unto men.', ref: 'Colossians 3:23', color: 'green', vers: 'kjv' },
    { verse_ul: 'For God hath not given us the spirit of fear;', verse: ' but of power, and of love, and of a sound mind.', ref: '2 Timothy 1:7', color: 'green', vers: 'kjv' },
    { verse_ul: 'All scripture is given by inspiration of God', verse: ', and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.', ref: '2 Timothy 3:16', color: 'green', vers: 'kjv' },
    { verse_ul: 'If we confess our sins', verse: ', he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.', ref: '1 John 1:9', color: 'green', vers: 'kjv' },
    { verse_ul: 'Thou art worthy, O Lord', verse: ', to receive glory and honour and power: for thou has created all things, and for thy pleasure they are and were created.', ref: 'Revelation 4:11', color: 'green', vers: 'kjv' },
// GREEN CSB
    { verse_ul: 'In the beginning', verse: ', God created the heavens and the earth.', ref: 'Genesis 1:1', color: 'green', vers: 'csb' },
    { verse_ul: 'Honor your father', verse: ' and your mother so that you may have a long life in the land that the LORD your God is giving you.', ref: 'Exodus 20:12', color: 'green', vers: 'csb' },
    { verse_ul: 'This is the day the LORD has made', verse: '; let us rejoice and be glad in it.', ref: 'Psalm 118:24', color: 'green', vers: 'csb' },
    { verse_ul: 'Your word is a lamp for my feet', verse: ' and a light on my path.', ref: 'Psalm 119:105', color: 'green', vers: 'csb' },
    { verse_ul: 'Trust in the LORD with all your heart', verse: ', and do not rely on your own understanding; in all your ways know him, and he will make your paths straight.', ref: 'Proverbs 3:5-6', color: 'green', vers: 'csb' },
    { verse_ul: 'A gentle answer turns away anger', verse: ', but a harsh word stirs up wrath.', ref: 'Proverbs 15:1', color: 'green', vers: 'csb' },
    { verse_ul: 'For a child will be born for us, a son will be given to us', verse: ', and the government will be on his shoulders. He will be named Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace.', ref: 'Isaiah 9:6', color: 'green', vers: 'csb' },
    { verse_ul: 'The grass withers', verse: ', the flower fades, but the word of our God remains forever.', ref: 'Isaiah 40:8', color: 'green', vers: 'csb' },
    { verse_ul: 'The Lord is good', verse: ', a stronghold in a day of distress; he cares for those who take refuge in him.', ref: 'Nahum 1:7', color: 'green', vers: 'csb' },
    { verse_ul: 'Then Jesus told him, “Go away, Satan! For it is written', verse: ': Worship the Lord your God, and serve only him.”', ref: 'Matthew 4:10', color: 'green', vers: 'csb' },
    { verse_ul: 'In the same way, let your light shine', verse: ' before others, so that they may see your good works and give glory to your Father in heaven.', ref: 'Matthew 5:16', color: 'green', vers: 'csb' },
    { verse_ul: 'Do not judge, and you will not be judged', verse: '. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven.', ref: 'Luke 6:37', color: 'green', vers: 'csb' },
    { verse_ul: 'So I say to you, ask, and it will be given to you', verse: '. Seek, and you will find. Knock, and the door will be opened to you.', ref: 'Luke 11:9', color: 'green', vers: 'csb' },
    { verse_ul: 'For God so loved the world in this way', verse: ': He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.', ref: 'John 3:16', color: 'green', vers: 'csb' },
    { verse_ul: 'This is my command', verse: ': Love one another as I have loved you.', ref: 'John 15:12', color: 'green', vers: 'csb' },
    { verse_ul: 'They said, "Believe in the Lord Jesus', verse: ', and you will be saved - you and your household."', ref: 'Acts 16:31', color: 'green', vers: 'csb' },
    { verse_ul: 'We know that all things work together for the good of those who love God', verse: ', who are called according to his purpose.', ref: 'Romans 8:28', color: 'green', vers: 'csb' },
    { verse_ul: 'Therefore, brothers and sisters, in view of the mercies of God', verse: ', I urge you to present your bodies as a living sacrifice, holy and pleasing to God; this is your true worship.', ref: 'Romans 12:1', color: 'green', vers: 'csb' },
    { verse_ul: 'In this regard, it is required', verse: ' that managers be found faithful.', ref: '1 Corinthians 4:2', color: 'green', vers: 'csb' },
    { verse_ul: 'And be kind and compassionate to one another', verse: ', forgiving one another, just as God also forgave you in Christ.', ref: 'Ephesians 4:32', color: 'green', vers: 'csb' },
    { verse_ul: 'Whatever you do', verse: ', do it from the heart, as something done for the Lord and not for people.', ref: 'Colossians 3:23', color: 'green', vers: 'csb' },
    { verse_ul: 'For God has not given us a spirit of fear', verse: ', but one of power, love, and sound judgment.', ref: '2 Timothy 1:7', color: 'green', vers: 'csb' },
    { verse_ul: 'All Scripture is inspired by God', verse: ' and is profitable for teaching, for rebuking, for correcting, for training in righteousness.', ref: '2 Timothy 3:16', color: 'green', vers: 'csb' },
    { verse_ul: 'If we confess our sins', verse: ', he is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.', ref: '1 John 1:9', color: 'green', vers: 'csb' },
    { verse_ul: 'Our Lord and God, you are worthy', verse: ' to receive glory and honor and power, because you have created all things, and by your will they exist and were created.', ref: 'Revelation 4:11', color: 'green', vers: 'csb' },
// RED KJV
    { verse_ul: 'So God created man in his own image', verse: ', in the image of God created he him; male and female created he them.', ref: 'Genesis 1:27', color: 'red', vers: 'kjv' },
    { verse_ul: 'Therefore shall ye keep my commandments', verse: ', and do them: I am the LORD.', ref: 'Leviticus 22:31', color: 'red', vers: 'kjv' },
    { verse_ul: 'And thou shalt love the LORD thy God', verse: ' with all thine heart, and with all thy soul, and with all thy might.', ref: 'Deuteronomy 6:5', color: 'red', vers: 'kjv' },
    { verse_ul: 'Give thanks unto the LORD', verse: ', call upon his name, make known his deeds among the people.', ref: '1 Chronicles 16:8', color: 'red', vers: 'kjv' },
    { verse_ul: 'Hearken unto this, O Job', verse: ': stand still, and consider the wondrous works of God.', ref: 'Job 37:14', color: 'red', vers: 'kjv' },
    { verse_ul: 'Let the words of my mouth', verse: ', and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.', ref: 'Psalm 19:14', color: 'red', vers: 'kjv' },
    { verse_ul: 'Hear my prayer, O God', verse: '; give ear to the words of my mouth.', ref: 'Psalm 54:2', color: 'red', vers: 'kjv' },
    { verse_ul: 'The LORD is good to all', verse: ': and his tender mercies are over all his works.', ref: 'Psalm 145:9', color: 'red', vers: 'kjv' },
    { verse_ul: 'Hear instruction', verse: ', and be wise, and refuse it not.', ref: 'Proverbs 8:33', color: 'red', vers: 'kjv' },
    { verse_ul: 'Even a child is known', verse: ' by his doings, whether his work be pure, and whether it be right.', ref: 'Proverbs 20:11', color: 'red', vers: 'kjv' },
    { verse_ul: 'He hath shewed thee, O man, what is good', verse: '; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?', ref: 'Micah 6:8', color: 'red', vers: 'kjv' },
    { verse_ul: 'But I say unto you, Love your enemies', verse: ', bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.', ref: 'Matthew 5:44', color: 'red', vers: 'kjv' },
    { verse_ul: 'And all things, whatsoever ye', verse: ' shall ask in prayer, believing, ye shall receive.', ref: 'Matthew 21:22', color: 'red', vers: 'kjv' },
    { verse_ul: 'Heaven and earth shall pass', verse: ' away: but my words shall not pass away.', ref: 'Mark 13:31', color: 'red', vers: 'kjv' },
    { verse_ul: 'And as ye would that men', verse: ' should do to you, do ye also to them likewise.', ref: 'Luke 6:31', color: 'red', vers: 'kjv' },
    { verse_ul: 'And ye shall know', verse: ' the truth, and the truth shall make you free.', ref: 'John 8:32', color: 'red', vers: 'kjv' },
    { verse_ul: 'Greater love hath no man', verse: ' than this, that a man lay down his life for his friends.', ref: 'John 15:13', color: 'red', vers: 'kjv' },
    { verse_ul: 'But ye shall receive power', verse: ', after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.', ref: 'Acts 1:8', color: 'red', vers: 'kjv' },
    { verse_ul: 'So then every one of us', verse: ' shall give account of himself to God.', ref: 'Romans 14:12', color: 'red', vers: 'kjv' },
    { verse_ul: 'Whether therefore ye eat', verse: ', or drink, or whatsoever ye do, do all to the glory of God.', ref: '1 Corinthians 10:31', color: 'red', vers: 'kjv' },
    { verse_ul: 'Let all things be', verse: ' done decently and in order.', ref: '1 Corinthians 14:40', color: 'red', vers: 'kjv' },
    { verse_ul: 'Children, obey', verse: ' your parents in the Lord: for this is right.', ref: 'Ephesians 6:1', color: 'red', vers: 'kjv' },
    { verse_ul: 'I can do all things', verse: ' through Christ which strengtheneth me.', ref: 'Philippians 4:13', color: 'red', vers: 'kjv' },
    { verse_ul: 'Wherefore, my beloved brethren, let every man be', verse: ' swift to hear, slow to speak, slow to wrath.', ref: 'James 1:19', color: 'red', vers: 'kjv' },
    { verse_ul: 'We love him', verse: ', because he first loved us.', ref: '1 John 4:19', color: 'red', vers: 'kjv' },
// RED CSB
    { verse_ul: 'So God created man in his own image', verse: '; he created him in the image of God; he created them male and female.', ref: 'Genesis 1:27', color: 'red', vers: 'csb' },
    { verse_ul: '“You are to keep my commands', verse: ' and do them; I am the LORD.”', ref: 'Leviticus 22:31', color: 'red', vers: 'csb' },
    { verse_ul: '“Love the LORD your God', verse: ' with all your heart, with all your soul, and with all your strength.”', ref: 'Deuteronomy 6:5', color: 'red', vers: 'csb' },
    { verse_ul: 'Give thanks to the LORD', verse: '; call on his name; proclaim his deeds among the peoples.', ref: '1 Chronicles 16:8', color: 'red', vers: 'csb' },
    { verse_ul: 'Listen to this, Job', verse: '. Stop and consider God’s wonders.', ref: 'Job 37:14', color: 'red', vers: 'csb' },
    { verse_ul: 'May the words of my mouth', verse: ' and the meditation of my heart be acceptable to you, LORD, my rock and my Redeemer.', ref: 'Psalm 19:14', color: 'red', vers: 'csb' },
    { verse_ul: 'God, hear my prayer', verse: '; listen to the words from my mouth.', ref: 'Psalm 54:2', color: 'red', vers: 'csb' },
    { verse_ul: 'The LORD is good to everyone', verse: '; his compassion rests on all he has made.', ref: 'Psalm 145:9', color: 'red', vers: 'csb' },
    { verse_ul: 'Listen to instruction', verse: ' and be wise; don’t ignore it.', ref: 'Proverbs 8:33', color: 'red', vers: 'csb' },
    { verse_ul: 'Even a young man is known', verse: ' by his actions - by whether his behavior is pure and upright.', ref: 'Proverbs 20:11', color: 'red', vers: 'csb' },
    { verse_ul: 'Mankind, he has told each of you what is good', verse: ' and what it is the LORD requires of you: to act justly, to love faithfulness, and to walk humbly with your God.', ref: 'Micah 6:8', color: 'red', vers: 'csb' },
    { verse_ul: '“But I tell you, love your enemies', verse: ' and pray for those who persecute you,”', ref: 'Matthew 5:44', color: 'red', vers: 'csb' },
    { verse_ul: '“And if you believe, you will', verse: ' receive whatever you ask for in prayer.”', ref: 'Matthew 21:22', color: 'red', vers: 'csb' },
    { verse_ul: '“Heaven and earth will pass', verse: ' away, but my words will never pass away.”', ref: 'Mark 13:31', color: 'red', vers: 'csb' },
    { verse_ul: '“Just as you want others', verse: ' to do for you, do the same for them.”', ref: 'Luke 6:31', color: 'red', vers: 'csb' },
    { verse_ul: '“You will know', verse: ' the truth, and the truth will set you free.”', ref: 'John 8:32', color: 'red', vers: 'csb' },
    { verse_ul: '“No one has greater love', verse: ' than this: to lay down his life for his friends.”', ref: 'John 15:13', color: 'red', vers: 'csb' },
    { verse_ul: '“But you will receive power', verse: ' when the Holy Spirit has come on you, and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth.”', ref: 'Acts 1:8', color: 'red', vers: 'csb' },
    { verse_ul: 'So then, each of us', verse: ' will give an account of himself to God. ', ref: 'Romans 14:12', color: 'red', vers: 'csb' },
    { verse_ul: 'So, whether you eat', verse: ' or drink, or whatever you do, do everything for the glory of God.', ref: '1 Corinthians 10:31', color: 'red', vers: 'csb' },
    { verse_ul: 'But everything is to be', verse: ' done decently and in order.', ref: '1 Corinthians 14:40', color: 'red', vers: 'csb' },
    { verse_ul: 'Children, obey', verse: ' your parents in the Lord, because this is right.', ref: 'Ephesians 6:1', color: 'red', vers: 'csb' },
    { verse_ul: 'I am able to do all things', verse: ' through him who strengthens me.', ref: 'Philippians 4:13', color: 'red', vers: 'csb' },
    { verse_ul: 'My dear brothers and sisters, understand this: Everyone should be', verse: ' quick to listen, slow to speak, and slow to anger,', ref: 'James 1:19', color: 'red', vers: 'csb' },
    { verse_ul: 'We love', verse: ' because he first loved us.', ref: '1 John 4:19', color: 'red', vers: 'csb' },
];

// Key Passages
const keyPassages = [
// BLUE
    { name: 'God&apos;s Covenant with Abraham', ref: 'Genesis 12:1-3', color: 'blue' },
    { name: 'A Shepherd&apos;s Song', ref: 'Psalm 23', color: 'blue' },
    { name: 'The Suffering Servant', ref: 'Isaiah 53', color: 'blue' },
    { name: 'The Twelve Apostles', ref: 'Matthew 10:2-4', color: 'blue' },
    { name: 'The Resurrection of Jesus', ref: 'Matthew 28', color: 'blue' },
    { name: 'The parable of the Good Samaritan', ref: 'Luke 10:25-37', color: 'blue' },
    { name: 'Jesus&apos; First Miracle', ref: 'John 2:1-11', color: 'blue' },
    { name: 'The Work of the Holy Spirit', ref: 'John 16:5-15', color: 'blue' },
    { name: 'The Conversion of Saul', ref: 'Acts 9:1-30', color: 'blue' },
    { name: 'The Love Chapter', ref: '1 Corinthians 13', color: 'blue' },
// GREEN
    { name: 'The Ten Commandments', ref: 'Exodus 20:3-17', color: 'green' },
    { name: 'A Psalm of Praise', ref: 'Psalm 100', color: 'green' },
    { name: 'The Greatness of God', ref: 'Isaiah 40', color: 'green' },
    { name: 'The Temptation of Jesus', ref: 'Matthew 4:1-11', color: 'green' },
    { name: 'The Sermon on the Mount', ref: 'Matthew 5-7', color: 'green' },
    { name: 'The Parable of the Sower', ref: 'Mark 4:1-20', color: 'green' },
    { name: 'The First Lord’s Supper', ref: 'Luke 22:15-20', color: 'green' },
    { name: 'Jesus and Nicodemus', ref: 'John 3:1-21', color: 'green' },
    { name: 'The Crucifixion', ref: 'John 19', color: 'green' },
    { name: 'The Faith Chapter', ref: 'Hebrews 11', color: 'green' },
// RED
    { name: 'The Creation', ref: 'Genesis 1–2:3', color: 'red' },
    { name: 'The Israelites Leave Egypt', ref: 'Exodus 12:37-42', color: 'red' },
    { name: 'A Prayer for Forgiveness', ref: 'Psalm 51', color: 'red' },
    { name: 'The Baptism of Jesus', ref: 'Matthew 3:13-17', color: 'red' },
    { name: 'The Model Prayer', ref: 'Matthew 6:5-15', color: 'red' },
    { name: 'The Great Commandments', ref: 'Mark 12:28-34', color: 'red' },
    { name: 'The Birth of Jesus', ref: 'Luke 2:1-7', color: 'red' },
    { name: 'The Parable of the Prodigal Son', ref: 'Luke 15:11-32', color: 'red' },
    { name: 'The Comfort Chapter', ref: 'John 14', color: 'red' },
    { name: 'The Christian’s Armor', ref: 'Ephesians 6:10-20', color: 'red' },
];

// Book Call
const bibleBooks = [
    { book: 'Genesis', ba: 'Genesis, Exodus' },
    { book: 'Exodus' },
    { book: 'Leviticus' },
    { book: 'Numbers' },
    { book: 'Deuteronomy' },
    { book: 'Joshua' },
    { book: 'Judges' },
    { book: 'Ruth' },
    { book: '1 Samuel' },
    { book: '2 Samuel' },
    { book: '1 Kings' },
    { book: '2 Kings' },
    { book: '1 Chronicles' },
    { book: '2 Chronicles' },
    { book: 'Ezra' },
    { book: 'Nehemiah' },
    { book: 'Esther' },
    { book: 'Job' },
    { book: 'Psalms' },
    { book: 'Proverbs' },
    { book: 'Ecclesiastes' },
    { book: 'Song of Solomon' },
    { book: 'Isaiah' },
    { book: 'Jeremiah' },
    { book: 'Lamentations' },
    { book: 'Ezekiel' },
    { book: 'Daniel' },
    { book: 'Hosea' },
    { book: 'Joel' },
    { book: 'Amos' },
    { book: 'Obadiah' },
    { book: 'Jonah' },
    { book: 'Micah' },
    { book: 'Nahum' },
    { book: 'Habakkuk' },
    { book: 'Zephaniah' },
    { book: 'Haggai' },
    { book: 'Zechariah' },
    { book: 'Malachi' },
    { book: 'Matthew' },
    { book: 'Mark' },
    { book: 'Luke' },
    { book: 'John' },
    { book: 'Acts' },
    { book: 'Romans' },
    { book: '1 Corinthians' },
    { book: '2 Corinthians' },
    { book: 'Galatians' },
    { book: 'Ephesians' },
    { book: 'Philippians' },
    { book: 'Colossians' },
    { book: '1 Thessalonians' },
    { book: '2 Thessalonians' },
    { book: '1 Timothy' },
    { book: '2 Timothy' },
    { book: 'Titus' },
    { book: 'Philemon' },
    { book: 'Hebrews' },
    { book: 'James' },
    { book: '1 Peter' },
    { book: '2 Peter' },
    { book: '1 John' },
    { book: '2 John' },
    { book: '3 John' },
    { book: 'Jude' },
    { book: 'Revelation', ba: 'Jude, Revelation' },
];
// Add .ba (before/after)
for (let i = 0; i < bibleBooks.length; i++) {
    let p_book;
    let n_book;
    if (i !== 0) {
        p_book = bibleBooks[i - 1].book;
    }
    let c_book = '<span class="ulVerse">' + bibleBooks[i].book + '</span>';
    if (i !== bibleBooks.length - 1) {
        n_book = bibleBooks[i + 1].book;
    }
    p_book = p_book ? p_book + ', ' : '';
    n_book = n_book ? ', ' + n_book : '';
    
    bibleBooks[i].ba = p_book + c_book + n_book;
}

var selectedColor = null;
var selectedBibleVersion = null;


document.addEventListener("DOMContentLoaded", () => {

class CountdownTimer {
    constructor(containerId, totalTime) {
        this.container = document.getElementById(containerId);
        this.totalTime = totalTime;
        this.remainingTime = totalTime;
        this.blocks = [];
        this.interval = null;
        this.timeIsUp = false; // Flag to track when time is up
        this.maxBlocks = 10; // Maximum visible blocks

        this.createUI();
    }

    createUI() {
        this.container.innerHTML = ''; // Clear previous content
        this.blocks = [];

        // Wrapper for styling
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('timer-wrapper');

        // Progress Bar Container
        this.progressBar = document.createElement('div');
        this.progressBar.classList.add('progress-bar');

        // Determine block count and size
        this.blockRatio = Math.ceil(this.totalTime / this.maxBlocks); // How many seconds per block
        this.displayBlocks = Math.min(this.totalTime, this.maxBlocks); // Number of blocks displayed

        for (let i = 0; i < this.displayBlocks; i++) {
            let block = document.createElement('div');
            block.classList.add('block');
            this.blocks.push(block);
            this.progressBar.appendChild(block);
        }

        // Status Text
        this.statusText = document.createElement('div');
        this.statusText.classList.add('status-text');
        this.statusText.textContent = 'READY';

        // Buttons Container
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('button-container');

        // Start Button
        this.startButton = document.createElement('button');
        this.startButton.textContent = 'Start';
        this.startButton.addEventListener('click', () => this.start());

        // Reset Button
        this.resetButton = document.createElement('button');
        this.resetButton.textContent = 'Reset';
        this.resetButton.addEventListener('click', () => this.reset());

        // Append buttons to button container
        this.buttonContainer.appendChild(this.startButton);
        this.buttonContainer.appendChild(this.resetButton);

        // Append elements to wrapper
        this.wrapper.appendChild(this.progressBar);
        this.wrapper.appendChild(this.statusText);
        this.wrapper.appendChild(this.buttonContainer);
        this.container.appendChild(this.wrapper);

        this.updateColors();
    }

    updateColors() {
        this.blocks.forEach((block, index) => {
            let percentage = ((index + 1) / this.displayBlocks) * 100;
            block.style.backgroundColor =
                percentage <= 20 ? 'red' :
                percentage <= 40 ? 'yellow' : 'green';
        });
    }

    start() {
        if (this.interval) return; // Prevent multiple intervals

        if (this.timeIsUp) {
            // If time was up, reset blocks and restart countdown
            this.timeIsUp = false;
            this.remainingTime = this.totalTime;
            this.blocks.forEach(block => block.style.visibility = 'visible');
            this.updateColors();
        }

        this.statusText.textContent = this.remainingTime; // Set initial countdown display

        this.interval = setInterval(() => {
            if (this.remainingTime > 0) {
                this.remainingTime--;
                let blockIndex = Math.floor(this.remainingTime / this.blockRatio);
                if (blockIndex < this.blocks.length) {
                    this.blocks[blockIndex].style.visibility = 'hidden';
                }
                this.statusText.textContent = this.remainingTime > 0 ? this.remainingTime : 'TIME IS UP!';
                this.updateColors();
            } else {
                this.stop();
                this.timeIsUp = true; // Set flag to allow restart on next Start press
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset() {
        this.stop();
        this.remainingTime = this.totalTime;
        this.timeIsUp = false;
        this.createUI();
        this.statusText.textContent = 'READY';
    }
}

/*
// Usage example:
document.addEventListener('DOMContentLoaded', () => {
    new CountdownTimer('timer-container', 10); // Only need to provide parent ID
});

// CSS
.timer-wrapper {
    border: 2px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    margin: auto;
}

.progress-bar {
    display: flex;
    gap: 2px;
    width: 200px; 
    justify-content: space-between;
}

.block {
    height: 20px;
    flex-grow: 1; 
    background-color: green;
}

.status-text {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
}

.button-container {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-self: flex-start; 
}

button {
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
}

// HTML
<div id="progress-bar"></div>
*/





    class ProgressBar {
        constructor({ parentId, val = 0, total = 0 } = {}) {
            this.val = val;
            this.total = total;
            this.parentId = parentId;
        }

        create() {
            const parent_element = document.getElementById(this.parentId);
            if (!parent_element) {
                console.error(`Parent element with ID "${this.parentId}" not found.`);
                return;
            }

            let progress_percent = this.total > 0 ? (this.val / this.total) * 100 : 0;
            progress_percent = Math.round(progress_percent * 10) / 10;

            parent_element.innerHTML = `
            <div id="status_bar_container" style="width: 100%; border: solid 1px black; box-sizing: border-box; padding: 5px;">
                <div class="bar_with_border_container" style="position: relative; background: #ddd; width: 100%; height: 30px; border-radius: 5px; overflow: hidden;">
                    <div class="bar_with_border_fill" style="background-color: green; width: ${progress_percent}%; height: 100%; transition: width 0.3s ease;"></div>
                    <span class="bar_with_border_text">
                        ${this.val >= this.total ? "COMPLETE" : `Progress: ${this.val} / ${this.total}`}
                    </span>
                </div>
            </div>
            `;
        }

        update(val, total) {
            this.val = val;
            this.total = total;
            this.create();
        }
    }

    class DrillCall {
        constructor({ verse_ul = "", verse = "", ref = "", color = "", vers = "", name = "", book = "", ba = "" } = {}) {
            this.verse_ul = verse_ul;
            this.verse = verse;
            this.ref = ref;
            this.color = color;
            this.vers = vers;
            this.name = name;
            this.book = book;
            this.ba = ba;
            this.answerVisible = false;
        }

        toggleAnswer() {
            this.answerVisible = !this.answerVisible;
        }

        //// temp need other drill call formats
        formatCall(type) {
            let formatted = '';
        
            switch (type) {
                case 1:
                    formatted = `<strong><u>${this.verse_ul}</u></strong>`;
                    if (this.answerVisible) formatted += `${this.verse}<br>- ${this.ref}`;
                    break;
        
                case 2:
                    formatted = `<strong>${this.ref}</strong>`;
                    if (this.answerVisible) formatted += `<br>${this.verse_ul} ${this.verse}`;
                    break;
        
                case 3:
                    formatted = `<strong>${this.name}</strong>`;
                    if (this.answerVisible) formatted += `<br>${this.ref}`;
                    break;
        
                case 4:
                    formatted = `<strong>${this.book}</strong>`;
                    if (this.answerVisible) formatted += `<br>${this.ba}`;
                    break;
            }
        
            return formatted;
        }
    }

    let selectedVersion = "";
    let selectedColor = "";
    let selectedColorText = "";
    let filteredVerses = [];
    let currentVerseIndex = 0; // Start at first verse (0)
    let drill;
    let progressBar;

    // needs different array arg -- bibleVerses+
    function filterVerses(arg_selectedCallType) {

        const drillData = {
            'call1': bibleVerses,
            'call2': bibleVerses,
            'call3': keyPassages,
            'call4': bibleBooks
        };
    
        // Ensure the selected call type exists in the mapping
        const selectedArray = drillData[arg_selectedCallType] || [];

        // Check if the selected array contains objects with a 'book' property
        if (selectedArray.length > 0 && 'book' in selectedArray[0]) {
            filteredVerses = selectedArray; // Include as-is
        } else {
            // Filter based on selected version and color
            filteredVerses = selectedArray.filter(v => 
                (!v.vers || v.vers === selectedVersion) && v.color === selectedColor
            );
        }
        
        // Shuffle the filtered verses
        filteredVerses.sort(() => Math.random() - 0.5);
        
        currentVerseIndex = 0; // Start at first verse

        if (filteredVerses.length === 0) {
            return;
        }

        const progressBarContainer = document.getElementById('progressBarContainer');
        if (progressBarContainer) {
            progressBar = new ProgressBar({ parentId: "progressBarContainer", val: 0, total: filteredVerses.length });
            progressBar.create();
        }

        loadVerse(arg_selectedCallType);
    }

    function loadVerse(arg_selectedCallType) {
        if (filteredVerses.length === 0 || currentVerseIndex >= filteredVerses.length) return;

        const verseData = filteredVerses[currentVerseIndex];
        drill = new DrillCall(verseData);
        updateDisplay(arg_selectedCallType);
    }

    function updateDisplay(arg_selectedCallType) {
        const verseContainer = document.getElementById("verseContainer");
        if (verseContainer && arg_selectedCallType === 'call1') verseContainer.innerHTML = drill.formatCall(1);
        if (verseContainer && arg_selectedCallType === 'call2') verseContainer.innerHTML = drill.formatCall(2);
        if (verseContainer && arg_selectedCallType === 'call3') verseContainer.innerHTML = drill.formatCall(3);
        if (verseContainer && arg_selectedCallType === 'call4') verseContainer.innerHTML = drill.formatCall(4);
        const toggleButton = document.getElementById("toggleButton");
        if (toggleButton) toggleButton.innerText = drill.answerVisible ? "Hide Answer" : "See Answer";
    }

    function nextVerse(arg_selectedCallType) {
        if (currentVerseIndex + 1 >= filteredVerses.length) {
            completeDrill();
            return;
        }

        currentVerseIndex++;
        loadVerse(arg_selectedCallType);

        const progressBarContainer = document.getElementById('progressBarContainer');
        if (progressBarContainer && progressBar) {
            progressBar.update(currentVerseIndex, filteredVerses.length);
        }
    }

    function completeDrill() {
        document.getElementById("verseContainer").innerHTML = "Drill complete! Well done!";
        document.getElementById("nextButton").style.display = "none"; // Hide "Next Verse"
        document.getElementById("toggleButton").style.display = "none"; // Hide "See Answer"
        document.getElementById("startOverButton").style.display = "inline-block"; // Show "Start Over"
        progressBar.update(filteredVerses.length, filteredVerses.length); // Ensure full progress
    }



    const docContainer = document.createElement('div');
    document.body.appendChild(docContainer);
    
    docContainer.innerHTML = `

<div id="progress-bar"></div>

        <h2>BIBLE DRILLS PRACTICE</h2>
        <div id="selectDiv"></div>
        <div id="selectedOpts"></div>
        <div id="start_div">
            <button id="start_btn">Start Practice</button>
        </div>
        <br>
        <div id="callTypeDiv"></div>
        <div id="drillContainer"></div>
    `;

    const timer = new CountdownTimer('progress-bar', 30);

    function setupDrillVersionColor() {
        // Clear all sections
        const callTypeDiv = document.getElementById("callTypeDiv");
        if (callTypeDiv) callTypeDiv.innerHTML = '';
        const drillContainer = document.getElementById('drillContainer');
        if (drillContainer) drillContainer.innerHTML = '';

        selectedVersion = "";
        selectedColor = "";
        selectedColorText = "";
        updateSelectedOptions();
        document.getElementById("selectDiv").innerHTML = `   
            <span><b>Choose book version and color:</b></span><br>
            <select id="versionSelect">
                <option value="" selected>---</option>
                <option value="kjv">KJV</option>
                <option value="csb">CSB</option>
            </select>
            <select id="colorSelect">
                <option value="" selected>---</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select>
        `;
        
        document.getElementById("versionSelect").addEventListener("change", (e) => {
            selectedVersion = e.target.value;
            updateSelectedOptions();
            filterVerses();
        });
    
        document.getElementById("colorSelect").addEventListener("change", (e) => {
            selectedColorText = e.target.options[e.target.selectedIndex].text;
            selectedColor = e.target.value;
            updateSelectedOptions();
            filterVerses();
        });
    }
    setupDrillVersionColor();

    function updateSelectedOptions() {
        document.getElementById('selectedOpts').innerHTML = `<b>Selected Version:</b> ${selectedVersion.toUpperCase()}<br><b>Selected Color:</b> ${selectedColorText}`;
        const start_btn = document.getElementById('start_btn');
        if (!start_btn) {
            const start_div = document.getElementById('start_div');
            start_div.innerHTML = '<button id="start_btn">Start Practice</button>';
            choose_options();
        }
    }
    updateSelectedOptions();
    
    // Chosen options
    function choose_options() {
        document.getElementById('start_btn').addEventListener("click", () => {
            if (selectedVersion === '' || selectedColor === '') {
                document.getElementById('selectedOpts').innerHTML = 'Please choose a Color and Version';
                return;
            }
            document.getElementById("selectDiv").innerHTML = '';
            document.getElementById('start_btn').remove();
            const start_div = document.getElementById('start_div');
            start_div.innerHTML = '<button id="reset_btn">Select Different Color or Version</button>';
            document.getElementById('reset_btn').addEventListener("click", () => {
                setupDrillVersionColor();
            });
            
            setupDrillCall();
            filterVerses();
        });
    }
    choose_options();
    
    function setupDrillCall() {
        document.getElementById("callTypeDiv").innerHTML = `   
            <span><b>Choose call type:</b></span><br>
            <form id="callTypeForm">
            <div><label><input type="radio" name="option" value="call1"> Completion Call</label></div>
            <div><label><input type="radio" name="option" value="call2"> Quotation Call</label></div>
            <div><label><input type="radio" name="option" value="call3"> Key Passage Call</label></div>
            <div><label><input type="radio" name="option" value="call4"> Book Call</label></div>
            </form>
        `;

        let selectedCallType = "";

        document.getElementById("callTypeForm").addEventListener("change", function() {
            selectedCallType = document.querySelector('input[name="option"]:checked').value;

            let selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                let selectedText = selectedOption.parentElement.textContent.trim();

                document.getElementById("callTypeDiv").innerHTML = `
                    <span><b>Call type:</b></span><br>
                    ${selectedText}<br>
                    <button id="changeCall_btn">Select Different Drill</button>
                `;
                
                document.getElementById('changeCall_btn').addEventListener("click", () => {
                    document.getElementById("drillContainer").innerHTML = '';
                    setupDrillCall();
                });

                function setupDrillContainer() {
                    document.getElementById("drillContainer").innerHTML = `
                        <span><h3>DRILL PRACTICE:</h3></span>
                        <div id="progressBarContainer"></div>
                        <div id="verseContainer"></div>
                        <button id="toggleButton">See Answer</button>
                        <button id="nextButton">Next Drill</button>
                        <button id="startOverButton" style="display: none;">Start Over</button>
                    `;
                
                    document.getElementById("toggleButton").addEventListener("click", () => {
                        if (drill) {
                            drill.toggleAnswer();
                            updateDisplay(selectedCallType);
                        }
                    });
                
                    document.getElementById("nextButton").addEventListener("click", () => {
                        nextVerse(selectedCallType);
                    });                    
                    
                    document.getElementById("startOverButton").addEventListener("click", startOver);

                    filterVerses(selectedCallType);
                }
                
                function startOver() {
                    currentVerseIndex = 0;
                    progressBar.update(0, filteredVerses.length);
                    setupDrillContainer();
                }
                setupDrillContainer();
            }
        });

    }

});