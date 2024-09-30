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
const bibleVerses = [ 
    { verse_ul: 'And God saw every thing', verse: ' that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.', ref: 'Genesis 1:31' },
    { verse_ul: 'Every man shall give as he is able', verse: ', according to the blessing of the LORD thy God which he hath given thee.', ref: 'Deuteronomy 16:17' },
    { verse_ul: 'And the people said unto Joshua', verse: ', The LORD our God will we serve, and his voice will we obey.', ref: 'Joshua 24:24' },
    { verse_ul: 'Sing unto him, sing psalms', verse: ' unto him, talk ye of all his wondrous works.', ref: '1 Chronicles 16:9' },
    { verse_ul: 'What time I am afraid', verse: ', I will trust in thee.', ref: 'Psalm 56:3' },
    { verse_ul: 'Thy word have I hid', verse: ' in mine heart, that I might not sin against thee.', ref: 'Psalm 119:11' },
    { verse_ul: 'A good name', verse: ' is rather to be chosen than great riches, and loving favour rather than silver and gold.', ref: 'Proverbs 22:1' },
    { verse_ul: 'Also I heard the voice', verse: ' of the LORD, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.', ref: 'Isaiah 6:8' },
    { verse_ul: 'I am the LORD', verse: ', and there is none else, there is no God beside me: I girded thee, though thou hast not known me:', ref: 'Isaiah 45:5' },
    { verse_ul: 'Bring ye all the tithes', verse: ' into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.', ref: 'Malachi 3:10' },
    { verse_ul: 'Go ye therefore, and teach all nations', verse: ', baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.', ref: 'Matthew 28:19-20' },
    { verse_ul: 'And Jesus increased', verse: ' in wisdom and stature, and in favour with God and man.', ref: 'Luke 2:52' },
    { verse_ul: 'For the Son of man', verse: ' is come to seek and to save that which was lost.', ref: 'Luke 19:10' },
    { verse_ul: 'God is a Spirit:', verse: ' and they that worship him must worship him in spirit and in truth.', ref: 'John 4:24' },
    { verse_ul: 'By this shall all men know', verse: ' that ye are my disciples, if ye have love one to another.', ref: 'John 13:35' },
    { verse_ul: 'Neither is there salvation in any other:', verse: ' for there is none other name under heaven given among men, whereby we must be saved.', ref: 'Acts 4:12' },
    { verse_ul: 'That if thou shalt confess with thy mouth the Lord Jesus', verse: ', and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.', ref: 'Romans 10:9' },
    { verse_ul: 'Know ye not', verse: ' that ye are the temple of God, and that the Spirit of God dwelleth in you?', ref: '1 Corinthians 3:16' },
    { verse_ul: 'For by grace', verse: ' are ye saved through faith; and that not of yourselves: it is the gift of God:', ref: 'Ephesians 2:8' },
    { verse_ul: 'In every thing give thanks:', verse: ' for this is the will of God in Christ Jesus concerning you.', ref: '1 Thessalonians 5:18' },
    { verse_ul: 'Let no man despise', verse: ' thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.', ref: '1 Timothy 4:12' },
    { verse_ul: 'Study to shew', verse: ' thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.', ref: '2 Timothy 2:15' },
    { verse_ul: 'But be ye doers', verse: ' of the word, and not hearers only, deceiving your own selves.', ref: 'James 1:22' },
    { verse_ul: 'Use hospitality', verse: ' one to another without grudging.', ref: '1 Peter 4:9' },
    { verse_ul: 'And this commandment have we from him', verse: ', That he who loveth God love his brother also.', ref: '1 John 4:21' },
];

const keyPassages = [
    { name: 'GOD&apos;S COVENANT WITH ABRAHAM', ref: 'Genesis 12:1-3' },
    { name: 'A SHEPHERD&apos;S SONG', ref: 'Psalm 23' },
    { name: 'THE SUFFERING SERVANT', ref: 'Isaiah 53' },
    { name: 'THE TWELVE APOSTLES', ref: 'Matthew 10:2-4' },
    { name: 'THE RESURRECTION OF JESUS', ref: 'Matthew 28' },
    { name: 'THE PARABLE OF THE GOOD SAMARITAN', ref: 'Luke 10:25-37' },
    { name: 'JESUS&apos; FIRST MIRACLE', ref: 'John 2:1-11' },
    { name: 'THE WORK OF THE HOLY SPIRIT', ref: 'John 16:5-15' },
    { name: 'THE CONVERSION OF SAUL', ref: 'Acts 9:1-30' },
    { name: 'THE LOVE CHAPTER', ref: '1 Corinthians 13' },
];

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

// Add ba (before/after)
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

// Main function to create new elements
function create_el(newId, type, parentId, content) {
    let parent_el = document.getElementById(parentId);
    let new_el = document.createElement(type);
    
    if (parent_el) {
        parent_el.appendChild(new_el);
    } else if (parentId === 'body') {
        document.body.appendChild(new_el);
    } else {
        parentId.appendChild(new_el);
    }

    new_el.id = newId;
    if (content) {
        new_el.innerHTML = content;
    }
}

// CREATE TITLE AND CONTAINER ELEMENTS
create_el('title', 'div', 'body');
title.classList.add('title');
title.innerHTML = 'BIBLE DRILLS PRACTICE (BLUE)';

// UNDERLINE VERSES
create_el('underline_verses_challenge', 'div', 'body');
underline_verses_challenge.innerHTML = '* Complete The Verse';
underline_verses_challenge.classList.add('title');
underline_verses_challenge.style.paddingTop = '24px';

// Create messages element to display progress and notifications
create_el('messages', 'div', 'body');
messages.classList.add('messages');

// Button to reset and shuffle verses again
create_el('reset_btn', 'button', 'body');
reset_btn.innerHTML = 'Start Over';
reset_btn.onclick = resetVerses;

// Create button to generate random verse
create_el('generate_verse_btn', 'button', 'body');
generate_verse_btn.innerHTML = 'Generate Random Verse';
generate_verse_btn.onclick = randomVerse;

// Create container for verse display
create_el('display_container', 'div', 'body');

// Button to show answer
create_el('show_answer_btn', 'button', 'body');
show_answer_btn.innerHTML = 'Show Answer';
show_answer_btn.style.display = 'none'; // Initially hidden
show_answer_btn.onclick = showAnswer;

// Variable to hold current verse details
let currentVerse;

// Shuffle the verses array for random order display
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Clone and shuffle bibleVerses for random ordering
let shuffledVerses = shuffleArray([...bibleVerses]); // Start with a shuffled array
let index = 0; // To track the current verse being displayed

// Function to generate and display a random verse (in order of shuffled list)
function randomVerse() {
    // If all verses are shown, reset and reshuffle
    if (index >= shuffledVerses.length) {
        index = 0;
        shuffledVerses = shuffleArray([...bibleVerses]); // Reshuffle the verses
        messages.innerHTML = 'All verses shown. Starting again!'; // Display message instead of alert
    } else {
        currentVerse = shuffledVerses[index]; // Get the next verse
        index++; // Increment the index for next time
        
        // Clear display container and message container
        display_container.innerHTML = '';
        messages.innerHTML = `Random Verse ${index} of ${bibleVerses.length} completed.`; // Update progress

        // Check if `verse_ul` exists and display it
        if (currentVerse.verse_ul) {
            display_container.innerHTML += `<span class="ulVerse">${currentVerse.verse_ul}</span>`;
        }

        // Show the answer button
        show_answer_btn.style.display = 'block'; // Show the button to reveal the answer
    }
}

// Function to reset verses
function resetVerses() {
    index = 0;
    shuffledVerses = shuffleArray([...bibleVerses]); // Reshuffle the verses
    messages.innerHTML = 'Verses reset! You can go through them again.'; // Display reset message
}

// Function to show the verse and reference
function showAnswer() {
    if (currentVerse) {
        // Check and append `verse` if it exists
        if (currentVerse.verse) {
            display_container.innerHTML += `<span class="verse">${currentVerse.verse}</span>`;
        }
        // Check and append `ref` if it exists
        if (currentVerse.ref) {
            display_container.innerHTML += `<br><span class="ref">${currentVerse.ref}</span>`;
        }
    }
    show_answer_btn.style.display = 'none'; // Hide the button after the answer is shown
}

// VERSES BY REFERENCE
create_el('ref_verses_challenge', 'div', 'body');
ref_verses_challenge.innerHTML = '* Recite The Verse';
ref_verses_challenge.classList.add('title');
ref_verses_challenge.style.paddingTop = '24px';

// Create messages element to display progress and notifications
create_el('messages2', 'div', 'body');
messages2.classList.add('messages');

// Button to reset and shuffle verses again
create_el('reset_btn2', 'button', 'body');
reset_btn2.innerHTML = 'Start Over';
reset_btn2.onclick = resetVerses_ref;

// Create button to generate random verse
create_el('generate_verse_btn2', 'button', 'body');
generate_verse_btn2.innerHTML = 'Generate Random Verse';
generate_verse_btn2.onclick = randomVerse_byRef;

// Create container for verse display
create_el('display_container2', 'div', 'body');

// Button to show answer
create_el('show_answer_btn2', 'button', 'body');
show_answer_btn2.innerHTML = 'Show Answer';
show_answer_btn2.style.display = 'none'; // Initially hidden
show_answer_btn2.onclick = showAnswer_ref;

// Variable to hold current verse details
let currentVerse2;

// Clone and shuffle bibleVerses for random ordering
let shuffledVerses2 = shuffleArray([...bibleVerses]); // Start with a shuffled array
let index2 = 0; // To track the current verse being displayed

// Function to generate and display a random verse (in order of shuffled list)
function randomVerse_byRef() {
    // If all verses are shown, reset and reshuffle
    if (index2 >= shuffledVerses2.length) {
        index2 = 0;
        shuffledVerses2 = shuffleArray([...bibleVerses]); // Reshuffle the verses
        messages2.innerHTML = 'All verses shown. Starting again!'; // Display message instead of alert
    } else {
        currentVerse2 = shuffledVerses2[index2]; // Get the next verse
        index2++; // Increment the index for next time
        
        // Clear display container and message container
        display_container2.innerHTML = '';
        messages2.innerHTML = `Random Verse ${index2} of ${bibleVerses.length} completed.`; // Update progress

        // Check if `verse_ul` exists and display it
        if (currentVerse2.ref) {
            display_container2.innerHTML += `<span class="ref">${currentVerse2.ref}</span>`;
        }

        // Show the answer button
        show_answer_btn2.style.display = 'block'; // Show the button to reveal the answer
    }
}

// Function to reset verses
function resetVerses_ref() {
    index2 = 0;
    shuffledVerses2 = shuffleArray([...bibleVerses]); // Reshuffle the verses
    messages2.innerHTML = 'Verses reset! You can go through them again.'; // Display reset message
}

// Function to show the verse and reference
function showAnswer_ref() {
    if (currentVerse2) {
        // Check and append `verse_ul` and 'verse' if it exists
        if (currentVerse2.verse_ul && currentVerse2.verse) {
            display_container2.innerHTML += `<br><span class="verse">${currentVerse2.verse_ul}${currentVerse2.verse}</span>`;
        }
    }
    show_answer_btn2.style.display = 'none'; // Hide the button after the answer is shown
}

// KEY PASSAGES BY NAME
create_el('key_passages_challenge', 'div', 'body');
key_passages_challenge.innerHTML = '* Key Passages (by name)';
key_passages_challenge.classList.add('title');
key_passages_challenge.style.paddingTop = '24px';

// Create messages element to display progress and notifications
create_el('messages3', 'div', 'body');
messages3.classList.add('messages');

// Button to reset and shuffle verses again
create_el('reset_btn3', 'button', 'body');
reset_btn3.innerHTML = 'Start Over';
reset_btn3.onclick = resetKeyPassages;

// Create button to generate random key passage
create_el('generate_verse_btn3', 'button', 'body');
generate_verse_btn3.innerHTML = 'Generate Random Passage';
generate_verse_btn3.onclick = randomKeyPassage;

// Create container for verse display
create_el('display_container3', 'div', 'body');

// Button to show answer
create_el('show_answer_btn3', 'button', 'body');
show_answer_btn3.innerHTML = 'Show Answer';
show_answer_btn3.style.display = 'none'; // Initially hidden
show_answer_btn3.onclick = showAnswerKeyPassages;

// Variable to hold current verse details
let current_keyPassage;

// Clone and shuffle key passages for random ordering
let shuffledKeyPassages = shuffleArray([...keyPassages]); // Start with a shuffled array
let index3 = 0; // To track the current verse being displayed

// Function to generate and display a random passage (in order of shuffled list)
function randomKeyPassage() {
    // If all passages are shown, reset and reshuffle
    if (index3 >= shuffledKeyPassages.length) {
        index3 = 0;
        shuffledKeyPassages = shuffleArray([...keyPassages]); // Reshuffle the passages
        messages3.innerHTML = 'All verses shown. Starting again!'; // Display message instead of alert
    } else {
        current_keyPassage = shuffledKeyPassages[index3]; // Get the next verse
        index3++; // Increment the index for next time
        // Clear display container and message container
        display_container3.innerHTML = '';
        messages3.innerHTML = `Random Key Passage ${index3} of ${keyPassages.length} completed.`; // Update progress

        // Check if `current_keyPassage` exists and display it
        if (current_keyPassage.ref) {
            display_container3.innerHTML += `<span class="ref">${current_keyPassage.name}</span>`;
        }

        // Show the answer button
        show_answer_btn3.style.display = 'block'; // Show the button to reveal the answer
    }
}

// Function to reset verses
function resetKeyPassages() {
    index3 = 0;
    shuffledKeyPassages = shuffleArray([...keyPassages]); // Reshuffle the verses
    messages3.innerHTML = 'Key passages reset! You can go through them again.'; // Display reset message
}

// Function to show the verse and reference
function showAnswerKeyPassages() {
    if (current_keyPassage) {
        // Check and append `name` and 'verse' if it exists
        if (current_keyPassage.name) {
            display_container3.innerHTML += `<br><span class="verse">${current_keyPassage.ref}</span>`;
        }
    }
    show_answer_btn3.style.display = 'none'; // Hide the button after the answer is shown
}

// KEY PASSAGES BY NAME
create_el('key_passages_ref_challenge', 'div', 'body');
key_passages_ref_challenge.innerHTML = '* Key Passages (by reference)';
key_passages_ref_challenge.classList.add('title');
key_passages_ref_challenge.style.paddingTop = '24px';

// Create messages element to display progress and notifications
create_el('messages4', 'div', 'body');
messages4.classList.add('messages');

// Button to reset and shuffle verses again
create_el('reset_btn4', 'button', 'body');
reset_btn4.innerHTML = 'Start Over';
reset_btn4.onclick = resetKeyPassages_ref;

// Create button to generate random key passage
create_el('generate_verse_btn4', 'button', 'body');
generate_verse_btn4.innerHTML = 'Generate Random Passage Reference';
generate_verse_btn4.onclick = randomKeyPassage_ref;

// Create container for verse display
create_el('display_container4', 'div', 'body');

// Button to show answer
create_el('show_answer_btn4', 'button', 'body');
show_answer_btn4.innerHTML = 'Show Answer';
show_answer_btn4.style.display = 'none'; // Initially hidden
show_answer_btn4.onclick = showAnswerKeyPassages_ref;

// Variable to hold current verse details
let current_keyPassage_ref;

// Clone and shuffle key passages for random ordering
let shuffledKeyPassages_ref = shuffleArray([...keyPassages]); // Start with a shuffled array
let index4 = 0; // To track the current verse being displayed

// Function to generate and display a random passage (in order of shuffled list)
function randomKeyPassage_ref() {
    // If all passages are shown, reset and reshuffle
    if (index4 >= shuffledKeyPassages_ref.length) {
        index4 = 0;
        shuffledKeyPassages_ref = shuffleArray([...keyPassages]); // Reshuffle the passages
        messages4.innerHTML = 'All verses shown. Starting again!'; // Display message instead of alert
    } else {
        current_keyPassage_ref = shuffledKeyPassages_ref[index4]; // Get the next verse
        index4++; // Increment the index for next time
        // Clear display container and message container
        display_container4.innerHTML = '';
        messages4.innerHTML = `Random Key Passage ${index4} of ${keyPassages.length} completed.`; // Update progress

        // Check if `current_keyPassage` exists and display it
        if (current_keyPassage_ref.ref) {
            display_container4.innerHTML += `<span class="ref">${current_keyPassage_ref.ref}</span>`;
        }

        // Show the answer button
        show_answer_btn4.style.display = 'block'; // Show the button to reveal the answer
    }
}

// Function to reset verses
function resetKeyPassages_ref() {
    index4 = 0;
    shuffledKeyPassages_ref = shuffleArray([...keyPassages]); // Reshuffle the verses
    messages4.innerHTML = 'Key passages reset! You can go through them again.'; // Display reset message
}

// Function to show the verse and reference
function showAnswerKeyPassages_ref() {
    if (current_keyPassage_ref) {
        // Check and append `name` and 'verse' if it exists
        if (current_keyPassage_ref.name) {
            display_container4.innerHTML += `<br><span class="verse">${current_keyPassage_ref.name}</span>`;
        }
    }
    show_answer_btn4.style.display = 'none'; // Hide the button after the answer is shown
}

//// WIP






// BOOKS OF THE BIBLE
create_el('bible_books_challenge', 'div', 'body');
bible_books_challenge.innerHTML = '* Books of The Bible';
bible_books_challenge.classList.add('title');
bible_books_challenge.style.paddingTop = '24px';

// Create messages element to display progress and notifications
create_el('messages5', 'div', 'body');
messages4.classList.add('messages');

// Button to reset and shuffle books again
create_el('reset_btn5', 'button', 'body');
reset_btn5.innerHTML = 'Start Over';
reset_btn5.onclick = resetBooksOfBible;

// Create button to generate random books
create_el('generate_verse_btn5', 'button', 'body');
generate_verse_btn5.innerHTML = 'Generate Random Books';
generate_verse_btn5.onclick = randomBooksOfBible;

// Create container for book display
create_el('display_container5', 'div', 'body');

// Button to show answer
create_el('show_answer_btn5', 'button', 'body');
show_answer_btn5.innerHTML = 'Show Answer';
show_answer_btn5.style.display = 'none'; // Initially hidden
show_answer_btn5.onclick = showAnswerBooksOfBible;

// Variable to hold current verse details
let current_BooksOfBible;

// Clone and shuffle key passages for random ordering
let shuffledBooksOfBible = shuffleArray([...bibleBooks]); // Start with a shuffled array
let index5 = 0; // To track the current verse being displayed

// Function to generate and display a random passage (in order of shuffled list)
function randomBooksOfBible() {
    // If all passages are shown, reset and reshuffle
    if (index5 >= shuffledBooksOfBible.length) {
        index5 = 0;
        shuffledBooksOfBible = shuffleArray([...bibleBooks]); // Reshuffle the passages
        messages4.innerHTML = 'All verses shown. Starting again!'; // Display message instead of alert
    } else {
        current_BooksOfBible = shuffledBooksOfBible[index5]; // Get the next verse
        index5++; // Increment the index for next time
        // Clear display container and message container
        display_container5.innerHTML = '';
        messages5.innerHTML = `Random Bible Book ${index5} of ${bibleBooks.length} completed.`; // Update progress

        // Check if `current_keyPassage` exists and display it
        if (current_BooksOfBible.book) {
            display_container5.innerHTML += `${current_BooksOfBible.book}`;
        }

        // Show the answer button
        show_answer_btn5.style.display = 'block'; // Show the button to reveal the answer
    }
}

// Function to reset verses
function resetBooksOfBible() {
    index5 = 0;
    shuffledBooksOfBible = shuffleArray([...bibleBooks]); // Reshuffle the verses
    messages5.innerHTML = 'Bible Books reset! You can go through them again.'; // Display reset message
}

// Function to show the verse and reference
function showAnswerBooksOfBible() {
    if (current_BooksOfBible) {
        // Check and append `name` and 'verse' if it exists
        if (current_BooksOfBible.ba) {
            display_container5.innerHTML += `<br><span class="verse">${current_BooksOfBible.ba}</span>`;
        }
    }
    show_answer_btn5.style.display = 'none'; // Hide the button after the answer is shown
}

