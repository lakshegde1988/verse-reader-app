export interface Verse {
  id: string;
  number: string;
  speaker?: string;
  text: string;
}

export interface Chapter {
  id: number;
  title: string;
  verses: Verse[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Instruction on Self-Realization",
    verses: [
      { id: "1.1", number: "1.1", speaker: "Janaka said:", text: "Master,\nhow is Knowledge to be achieved,\ndetachment acquired,\nliberation attained?" },
      { id: "1.2", number: "1.2", speaker: "Ashtavakra said:", text: "To be free,\nshun the experiences of the senses\nlike poison.\nTurn your attention to\nforgiveness, sincerity, kindness, simplicity, truth." },
      { id: "1.3", number: "1.3", speaker: "Ashtavakra said:", text: "You are not earth, water, fire or air.\nNor are you empty space.\nLiberation is to know yourself\nas Awareness alone—\nthe Witness of these." },
      { id: "1.4", number: "1.4", speaker: "Ashtavakra said:", text: "Abide in Awareness\nwith no illusion of person.\nYou will be instantly free and at peace." },
      { id: "1.5", number: "1.5", speaker: "Ashtavakra said:", text: "You have no caste or duties.\nYou are invisible, unattached, formless.\nYou are the Witness of all things.\nBe happy." },
      { id: "1.6", number: "1.6", speaker: "Ashtavakra said:", text: "Right and wrong, pleasure and pain,\nexist in mind only.\nThey are not your concern.\nYou neither do nor enjoy.\nYou are free." },
      { id: "1.7", number: "1.7", speaker: "Ashtavakra said:", text: "You are the Solitary Witness\nof All That Is,\nforever free.\nYour only bondage is not seeing This." },
      { id: "1.8", number: "1.8", speaker: "Ashtavakra said:", text: "The thought: \"I am the doer\"\nis the bite of a poisonous snake.\nTo know: \"I do nothing\"\nis the wisdom of faith.\nBe happy." },
      { id: "1.9", number: "1.9", speaker: "Ashtavakra said:", text: "A single understanding:\n\"I am the One Awareness,\"\nconsumes all suffering\nin the fire of an instant.\nBe happy." },
      { id: "1.10", number: "1.10", speaker: "Ashtavakra said:", text: "You are unbounded Awareness—\nBliss, Supreme Bliss—\nin which the universe appears\nlike the mirage of a snake in a rope.\nBe happy." },
      { id: "1.11", number: "1.11", speaker: "Ashtavakra said:", text: "It is true what they say:\n\"You are what you think.\"\nIf you think you are bound you are bound.\nIf you think you are free you are free." },
      { id: "1.12", number: "1.12", speaker: "Ashtavakra said:", text: "You are Self—the Solitary Witness.\nYou are perfect, all-pervading, One.\nYou are free, desireless, forever still.\nThe universe is but a seeming in You." },
      { id: "1.13", number: "1.13", speaker: "Ashtavakra said:", text: "Meditate on this: \"I am Awareness alone—Unity itself.\"\nGive up the idea that you are separate, a person,\nthat there is within and without." },
      { id: "1.14", number: "1.14", speaker: "Ashtavakra said:", text: "You have long been bound thinking:\n\"I am a person.\"\nLet the knowledge: \"I am Awareness alone\"\nbe the sword that frees you." },
      { id: "1.15", number: "1.15", speaker: "Ashtavakra said:", text: "You are now and forever\nfree, luminous, transparent, still.\nThe practice of meditation\nkeeps one in bondage." },
      { id: "1.16", number: "1.16", speaker: "Ashtavakra said:", text: "You are pure Consciousness—\nthe substance of the universe.\nThe universe exists within you.\nDon't be small-minded." },
      { id: "1.17", number: "1.17", speaker: "Ashtavakra said:", text: "You are unconditioned, changeless, formless.\nYou are solid, unfathomable, cool.\nDesire nothing.\nYou are Consciousness." },
      { id: "1.18", number: "1.18", speaker: "Ashtavakra said:", text: "That which has form is not real.\nOnly the formless is permanent.\nOnce this is known,\nyou will not return to illusion." },
      { id: "1.19", number: "1.19", speaker: "Ashtavakra said:", text: "Just as a mirror exists\nboth within and without\nthe image reflected,\nthe Supreme Self exists\nboth within and without the body." },
      { id: "1.20", number: "1.20", speaker: "Ashtavakra said:", text: "Just as the same space exists\nboth within and without a jar,\nthe timeless, all-pervasive One\nexists as Totality." },
    ]
  },
  {
    id: 2,
    title: "Joy of Self-Realization",
    verses: [
      { id: "2.1", number: "2.1", speaker: "Janaka said:", text: "I am now spotless and at peace—\nAwareness beyond Consciousness.\nAll this time\nI have been duped by illusion." },
      { id: "2.2", number: "2.2", speaker: "Janaka said:", text: "By this light alone\nthe body and the universe appear.\nI am Everything\nor Nothing." },
      { id: "2.3", number: "2.3", speaker: "Janaka said:", text: "Seeing there is no\nuniverse or body,\nby grace the Self is revealed." },
      { id: "2.4", number: "2.4", speaker: "Janaka said:", text: "As waves, foam and bubbles\nare not different from water,\nso the universe emanating from Self\nis not different from Self." },
      { id: "2.5", number: "2.5", speaker: "Janaka said:", text: "Look closely at cloth,\nyou see only threads.\nLook closely at creation,\nyou see only Self." },
      { id: "2.6", number: "2.6", speaker: "Janaka said:", text: "As sweetness\npervades sugarcane juice,\nI am the essence of creation." },
      { id: "2.7", number: "2.7", speaker: "Janaka said:", text: "Not seeing Self, the world is materialized.\nSeeing Self, the world is vanished.\nA rope is not a snake,\nbut can appear to be." },
      { id: "2.8", number: "2.8", speaker: "Janaka said:", text: "I am not other than Light.\nThe universe manifests\nat my glance." },
      { id: "2.9", number: "2.9", speaker: "Janaka said:", text: "The mirage of universe appears in me\nas silver appears in mother-of-pearl,\nas a snake appears in a rope,\nas water appears on a desert horizon." },
      { id: "2.10", number: "2.10", speaker: "Janaka said:", text: "As a pot returns to clay,\na wave to water,\na bracelet to gold,\nso will the universe return to Me." },
      { id: "2.11", number: "2.11", speaker: "Janaka said:", text: "I am wonderful indeed—\nbeyond adoration.\nI cannot decay nor ever die,\nthough God and all the universe\nshould perish to the last blade of grass." },
      { id: "2.12", number: "2.12", speaker: "Janaka said:", text: "I am wonderful indeed—\nbeyond adoration.\nEven with a body I am One.\nI neither come nor go.\nI am everywhere at once." },
      { id: "2.13", number: "2.13", speaker: "Janaka said:", text: "I am wonderful indeed—\nbeyond adoration.\nI am astounded at my powers.\nThe universe appears within me\nbut I do not touch it." },
      { id: "2.14", number: "2.14", speaker: "Janaka said:", text: "I am wonderful indeed—\nbeyond adoration.\nI am everything thought or spoken,\nand have nothing." },
      { id: "2.15", number: "2.15", speaker: "Janaka said:", text: "In Reality,\nknowledge, the knower, and the knowable\ndo not exist.\nI am the transparent Self\nin which through ignorance\nthey appear." },
      { id: "2.16", number: "2.16", speaker: "Janaka said:", text: "Looking at One and seeing many\nis the cause of all misery.\nThe only cure is to realize\nwhat is seen is not there.\nI am One—aware, blissful, immaculate." },
      { id: "2.17", number: "2.17", speaker: "Janaka said:", text: "I am unbounded Awareness.\nOnly in imagination do I have limits.\nReflecting on this,\nI abide in the Absolute." },
      { id: "2.18", number: "2.18", speaker: "Janaka said:", text: "I am neither free nor bound.\nThe illusion of such things\nhas fallen into disbelief.\nThough I contain creation,\nit has no substance." },
      { id: "2.19", number: "2.19", speaker: "Janaka said:", text: "Having seen for certain\nthat this universe and body\nis without form or substance,\nI am revealed as Awareness alone.\nImagination has no place here." },
      { id: "2.20", number: "2.20", speaker: "Janaka said:", text: "The body exists only in imagination,\nas do heaven and hell,\nbondage, freedom, fear.\nAre these my concern?\nI, who am pure Awareness?" },
      { id: "2.21", number: "2.21", speaker: "Janaka said:", text: "I see no differences or separation.\nEven the multitudes appear\nas a single formless desert.\nTo what should I cling?" },
      { id: "2.22", number: "2.22", speaker: "Janaka said:", text: "I am not the body.\nI do not have a body.\nI am Awareness, not a person.\nMy thirst for life bound me\nto a seeming of life." },
      { id: "2.23", number: "2.23", speaker: "Janaka said:", text: "In the limitless ocean of Myself\nthe winds of the mind\nroil the myriad waves of the world." },
      { id: "2.24", number: "2.24", speaker: "Janaka said:", text: "But when the wind subsides\nin the limitless ocean\nthe ark of personhood is swallowed up,\nalong with the universe it carries." },
      { id: "2.25", number: "2.25", speaker: "Janaka said:", text: "And how wonderful it is!\nIn the limitless ocean of Myself,\nwaves of beings\narise, collide, play for a time,\nthen disappear—as is their nature." },
    ]
  },
  {
    id: 3,
    title: "Test of Self-Realization",
    verses: [
      { id: "3.1", number: "3.1", speaker: "Ashtavakra said:", text: "Having realized yourself as One,\nbeing serene and indestructible,\nwhy do you desire wealth?" },
      { id: "3.2", number: "3.2", speaker: "Ashtavakra said:", text: "Just as imagining silver in mother-of-pearl,\ncauses greed to arise,\nso does ignorance of Self\ncause desire for illusion." },
      { id: "3.3", number: "3.3", speaker: "Ashtavakra said:", text: "Having realized yourself as That\nin which the waves of the world rise and fall,\nwhy do you run around in turmoil?" },
      { id: "3.4", number: "3.4", speaker: "Ashtavakra said:", text: "Having realized yourself as pure Awareness,\nas beautiful beyond description,\nhow can you remain a slave to lust?" },
      { id: "3.5", number: "3.5", speaker: "Ashtavakra said:", text: "It is strange\nthat in a sage who has realized\nSelf in All and All in Self\nthis sense of ownership should continue." },
      { id: "3.6", number: "3.6", speaker: "Ashtavakra said:", text: "Strange that one abiding in the Absolute,\nintent on freedom,\nshould be vulnerable to lust\nand weakened by amorous pastimes." },
      { id: "3.7", number: "3.7", speaker: "Ashtavakra said:", text: "Strange that knowing lust\nas an enemy of knowledge,\none so weak and nearing death\nshould still crave sensual pleasure." },
      { id: "3.8", number: "3.8", speaker: "Ashtavakra said:", text: "Strange that one who is unattached\nto the things of this world and the next,\nwho can discriminate between the transient and the timeless,\nwho yearns for freedom,\nshould yet fear the dissolution of the body." },
      { id: "3.9", number: "3.9", speaker: "Ashtavakra said:", text: "Whether acclaimed or tormented\nthe serene sage abides in the Self.\nHe is neither gratified nor angered." },
      { id: "3.10", number: "3.10", speaker: "Ashtavakra said:", text: "A great soul\nwitnesses his body\'s actions\nas if they were another\'s.\nHow can praise or blame disturb him?" },
      { id: "3.11", number: "3.11", speaker: "Ashtavakra said:", text: "Realizing the universe is illusion,\nhaving lost all curiosity,\nhow can one of steady mind fear death?" },
      { id: "3.12", number: "3.12", speaker: "Ashtavakra said:", text: "With whom can we compare\nthe great soul\nwho, content knowing Self,\nremains desireless in disappointment?" },
      { id: "3.13", number: "3.13", speaker: "Ashtavakra said:", text: "Why should a person of steady mind,\nwho sees the nothingness of objects,\nprefer one thing to another?" },
      { id: "3.14", number: "3.14", speaker: "Ashtavakra said:", text: "He who is unattached,\nuntouched by opposites,\nfree of desire,\nexperiences neither pleasure nor pain\nas events pass through." },
    ]
  },
  {
    id: 4,
    title: "Glorification of Self-Realization",
    verses: [
      { id: "4.1", number: "4.1", speaker: "Janaka said:", text: "Surely one who knows Self,\nthough he plays the game of life,\ndiffers greatly from the world\'s\nbewildered burdened beasts." },
      { id: "4.2", number: "4.2", speaker: "Janaka said:", text: "Truly the yogi feels no elation,\nthough he abides in the exalted state\nyearned for by Indra and all the\ndiscontented gods." },
      { id: "4.3", number: "4.3", speaker: "Janaka said:", text: "Surely one who knows That\nis not touched by virtue or vice,\njust as space is not touched by smoke,\nthough it seems to be." },
      { id: "4.4", number: "4.4", speaker: "Janaka said:", text: "Who can prevent the great soul,\nwho knows the universe as Self,\nfrom living life as it comes?" },
      { id: "4.5", number: "4.5", speaker: "Janaka said:", text: "Of the four kinds of beings,\nfrom Brahma to a blade of grass,\nonly the sage can renounce\naversion and desire." },
      { id: "4.6", number: "4.6", speaker: "Janaka said:", text: "Rare is he who knows himself\nas One with no other—\nthe Lord of the Universe.\nHe acts as he knows\nand is never afraid." },
    ]
  },
  {
    id: 5,
    title: "Four Ways to Dissolution",
    verses: [
      { id: "5.1", number: "5.1", speaker: "Ashtavakra said:", text: "You are immaculate,\ntouched by nothing.\nWhat is there to renounce?\nThe mind is complex—let it go.\nKnow the peace of dissolution." },
      { id: "5.2", number: "5.2", speaker: "Ashtavakra said:", text: "The universe arises from you\nlike foam from the sea.\nKnow yourself as One.\nEnter the peace of dissolution." },
      { id: "5.3", number: "5.3", speaker: "Ashtavakra said:", text: "Like an imagined snake in a rope\nthe universe appears to exist\nin the immaculate Self\nbut does not.\nSeeing this you know: \"There is nothing to dissolve.\"" },
      { id: "5.4", number: "5.4", speaker: "Ashtavakra said:", text: "You are perfect, changeless,\nthrough misery and happiness,\nhope and despair,\nlife and death.\nThis is the state of dissolution." },
    ]
  },
  {
    id: 6,
    title: "The Higher Knowledge",
    verses: [
      { id: "6.1", number: "6.1", speaker: "Janaka said:", text: "I am infinite space;\nthe universe is a jar.\nThis I know.\nNo need to renounce, accept or destroy." },
      { id: "6.2", number: "6.2", speaker: "Janaka said:", text: "I am a shoreless ocean;\nthe universe makes waves.\nThis I know.\nNo need to renounce, accept or destroy." },
      { id: "6.3", number: "6.3", speaker: "Janaka said:", text: "I am mother-of–pearl;\nthe universe is the illusion of silver.\nThis I know.\nNo need to renounce, accept or destroy." },
      { id: "6.4", number: "6.4", speaker: "Janaka said:", text: "I am in all beings;\nall beings are in me.\nThis I know.\nNo need to renounce, accept or destroy." },
    ]
  },
  {
    id: 7,
    title: "Nature of Self-Realization",
    verses: [
      { id: "7.1", number: "7.1", speaker: "Janaka said:", text: "In me, the shoreless ocean,\nthe ark of universe\ndrifts here and there\non the winds of its nature.\nI am not impatient." },
      { id: "7.2", number: "7.2", speaker: "Janaka said:", text: "In me, the shoreless ocean,\nlet the waves of the universe\nrise and fall as they will.\nI am neither enhanced nor diminished." },
      { id: "7.3", number: "7.3", speaker: "Janaka said:", text: "In me, the shoreless ocean,\nthe universe is imagined.\nI am still and formless.\nIn this alone I abide." },
      { id: "7.4", number: "7.4", speaker: "Janaka said:", text: "The Self is not in objects,\nnor are objects in the pure and infinite Self.\nThe Self is tranquil,\nfree of attachment and desire.\nIn this alone I abide." },
      { id: "7.5", number: "7.5", speaker: "Janaka said:", text: "I am Awareness alone.\nThe world is passing show.\nHow can thoughts arise\nof acceptance or rejection?\nAnd where?" },
    ]
  },
  {
    id: 8,
    title: "Bondage and Liberation",
    verses: [
      { id: "8.1", number: "8.1", speaker: "Ashtavakra said:", text: "When the mind desires or grieves things,\naccepts or rejects things,\nis pleased or displeased by things—\nthis is bondage." },
      { id: "8.2", number: "8.2", speaker: "Ashtavakra said:", text: "When the mind does not\ndesire or grieve,\naccept or reject,\nbecome pleased or displeased,\nliberation is at hand." },
      { id: "8.3", number: "8.3", speaker: "Ashtavakra said:", text: "If the mind is attached to any experience,\nthis is bondage.\nWhen the mind is detached from all experience,\nthis is liberation." },
      { id: "8.4", number: "8.4", speaker: "Ashtavakra said:", text: "When there is no \"I\"\nthere is only liberation.\nWhen \"I\" appears\nbondage appears with it.\nKnowing this,\nit is effortless to refrain\nfrom accepting and rejecting." },
    ]
  },
  {
    id: 9,
    title: "Detachment",
    verses: [
      { id: "9.1", number: "9.1", speaker: "Ashtavakra said:", text: "Opposing forces,\nduties done and left undone—\nwhen does it end\nand for whom?\nConsidering this, be ever desireless,\nlet go of all things,\nand to the world turn an indifferent eye." },
      { id: "9.2", number: "9.2", speaker: "Ashtavakra said:", text: "Rare and blessed is one\nwhose desire to live,\nto enjoy and to know,\nhas been extinguished by observing\nthe ways of men." },
      { id: "9.3", number: "9.3", speaker: "Ashtavakra said:", text: "Seeing all things as threefold suffering,\nthe sage becomes still.\nInsubstantial, transient, contemptible—\nthe world is fit only for rejection." },
      { id: "9.4", number: "9.4", speaker: "Ashtavakra said:", text: "Was there an age or time\nmen existed without opposites?\nLeave the opposites behind.\nBe content with what comes.\nPerfection." },
      { id: "9.5", number: "9.5", speaker: "Ashtavakra said:", text: "The greatest seers, saints and yogis\nagree on very little.\nSeeing this,\nwho could not be indifferent to knowledge\nand become still?" },
      { id: "9.6", number: "9.6", speaker: "Ashtavakra said:", text: "One who\nthrough worldly indifference,\nthrough serenity and reason,\nsees his true nature and escapes illusion—\nis he not a true teacher?" },
      { id: "9.7", number: "9.7", speaker: "Ashtavakra said:", text: "In the myriad forms of the universe\nsee the primal element alone.\nYou will be instantly free,\nand abide in Self." },
      { id: "9.8", number: "9.8", speaker: "Ashtavakra said:", text: "Desire creates the world—renounce it.\nRenounce desires\nand you renounce the world.\nNow you may live as you are." },
    ]
  },
  {
    id: 10,
    title: "Quietude",
    verses: [
      { id: "10.1", number: "10.1", speaker: "Ashtavakra said:", text: "Give up desire,\nwhich is the enemy.\nGive up prosperity,\nwhich is born of mischief and good works.\nBe indifferent." },
      { id: "10.2", number: "10.2", speaker: "Ashtavakra said:", text: "Look upon\nfriends, lands, wealth, houses, wives, gifts—\nand all apparent good fortune—\nas a passing show,\nas a dream lasting three to five days." },
      { id: "10.3", number: "10.3", speaker: "Ashtavakra said:", text: "Where there is desire, there is the world.\nBe firm in non-attachment.\nBe free of desire.\nBe happy." },
      { id: "10.4", number: "10.4", speaker: "Ashtavakra said:", text: "Bondage and desire are the same.\nDestroy desire and be free.\nOnly by detaching from the world\ndoes one joyfully realize Self." },
      { id: "10.5", number: "10.5", speaker: "Ashtavakra said:", text: "You are One—\nAwareness itself.\nThe universe is neither aware\nnor does it exist.\nEven ignorance is unreal.\nWhat is left to know?" },
      { id: "10.6", number: "10.6", speaker: "Ashtavakra said:", text: "Attached as you have been to\nkingdoms, sons, wives, bodies, pleasures—\nlife after life—\nstill they are now lost forever." },
    ]
  },
  {
    id: 11,
    title: "The Way of Desirelessness",
    verses: [
      { id: "11.1", number: "11.1", speaker: "Ashtavakra said:", text: "The wise one does not pine for the body,\nnor crave for pleasure,\nnor fear for pain.\nHe abides in the peace of his own nature." },
      { id: "11.2", number: "11.2", speaker: "Ashtavakra said:", text: "To the desireless one\nthe whole world seems like a pile of dust.\nHe is happy with little,\nseeing all things as useless." },
      { id: "11.3", number: "11.3", speaker: "Ashtavakra said:", text: "The wise one neither praises nor blames,\nneither loves nor hates the things of the world.\nHaving abandoned all preferences,\nhe abides in his own self alone." },
      { id: "11.4", number: "11.4", speaker: "Ashtavakra said:", text: "The desireless sage does not look before or behind.\nNeither does he yearn for the future.\nFree from memory and expectation,\nhe abides in eternal now." },
      { id: "11.5", number: "11.5", speaker: "Ashtavakra said:", text: "Happy is the man who, abandoning the desire for a son,\nfor wealth and for the fruits of action,\ntakes to ascetic life and finds peace." },
      { id: "11.6", number: "11.6", speaker: "Ashtavakra said:", text: "The wise one, though living in the world,\nis not affected by it.\nLike a lotus leaf in water,\nhe remains unstained." },
    ]
  },
  {
    id: 12,
    title: "Timeless Stillness",
    verses: [
      { id: "12.1", number: "12.1", speaker: "Janaka said:", text: "I am the eternal stillness in which the universe appears,\nwithout division or change.\nYet I am not confined within,\nnor do I touch anything." },
      { id: "12.2", number: "12.2", speaker: "Janaka said:", text: "Knowing myself as the witness of time,\nI am free from past and future.\nIn this timeless present,\nI stand alone and complete." },
      { id: "12.3", number: "12.3", speaker: "Janaka said:", text: "As waves arise and subside in the ocean,\nso all things arise and dissolve in Me.\nYet I remain unmoved,\nimmaculate and eternal." },
      { id: "12.4", number: "12.4", speaker: "Janaka said:", text: "Though countless minds reflect within me,\nI am singular, undivided, and alone.\nFree from the notions of birth and death,\nI am the unchanged consciousness." },
    ]
  },
  {
    id: 13,
    title: "State of Happiness",
    verses: [
      { id: "13.1", number: "13.1", speaker: "Janaka said:", text: "Happy am I,\nfree from the fever of desire.\nHappy am I,\nwith no care or concern.\nFree from effort and struggle,\nI rest in my own nature." },
      { id: "13.2", number: "13.2", speaker: "Janaka said:", text: "No longer do I strive\nfor what is, or what is not.\nNo longer do I judge\nwhat I see.\nI am happy,\nabiding in peace." },
      { id: "13.3", number: "13.3", speaker: "Janaka said:", text: "Even knowing the truth,\none must live in this world.\nBut now I live without attachment,\nlike an actor in a play.\nI am happy." },
      { id: "13.4", number: "13.4", speaker: "Janaka said:", text: "All my life I have been bound\nby the false belief that I was a person.\nBut now, seeing the truth,\nI am liberated and happy." },
    ]
  },
  {
    id: 14,
    title: "Exalted State",
    verses: [
      { id: "14.1", number: "14.1", speaker: "Janaka said:", text: "I stand apart from all things,\nyet I am not separate.\nI contain the universe,\nyet I am beyond it.\nWhat can disturb me?" },
      { id: "14.2", number: "14.2", speaker: "Janaka said:", text: "Neither the virtuous nor the wicked\ncan disturb the peace I know.\nI am like the sky—\nwithin me all things appear and disappear." },
      { id: "14.3", number: "14.3", speaker: "Janaka said:", text: "Having realized that nothing truly exists,\nexcept the eternal Absolute,\nI have become the mute witness\nof the play of illusion." },
      { id: "14.4", number: "14.4", speaker: "Janaka said:", text: "Like a mirror that reflects all things\nyet is untouched by them,\nI am the consciousness in which\nall experiences arise and fade." },
    ]
  },
  {
    id: 15,
    title: "Emptiness of Self",
    verses: [
      { id: "15.1", number: "15.1", speaker: "Ashtavakra said:", text: "The nature of Self is emptiness.\nThere is no thing to grasp,\nno person to be found.\nWhere is bondage? Where is freedom?" },
      { id: "15.2", number: "15.2", speaker: "Ashtavakra said:", text: "All that is perceived is a display of illusion.\nNeither knower nor known exists.\nIn this vast emptiness,\nwhere can there be any difference?" },
      { id: "15.3", number: "15.3", speaker: "Ashtavakra said:", text: "The mind cannot grasp\nwhat is beyond the mind.\nWhen the mind dissolves,\nthen only emptiness remains." },
      { id: "15.4", number: "15.4", speaker: "Ashtavakra said:", text: "The Self is neither here nor there,\nneither in the body nor in the world.\nIt is the emptiness in which\nall appearances dance." },
    ]
  },
  {
    id: 16,
    title: "Futility of Effort",
    verses: [
      { id: "16.1", number: "16.1", speaker: "Ashtavakra said:", text: "All effort is futile.\nAll knowledge is illusion.\nThere is no one to attain,\nno goal to reach.\nRemain still." },
      { id: "16.2", number: "16.2", speaker: "Ashtavakra said:", text: "Do not seek, do not practice,\ndo not desire.\nAll doing perpetuates illusion.\nIn the state of non-doing,\nliberation shines." },
      { id: "16.3", number: "16.3", speaker: "Ashtavakra said:", text: "The seeking itself is the bondage.\nWhen seeking ceases,\nthere is nothing to seek or find.\nJust be as you are." },
      { id: "16.4", number: "16.4", speaker: "Ashtavakra said:", text: "The more you know, the more confusion arises.\nThe more you do, the more bondage increases.\nIn unknowing and non-action\nlies your true nature." },
    ]
  },
  {
    id: 17,
    title: "The Truly Free",
    verses: [
      { id: "17.1", number: "17.1", speaker: "Ashtavakra said:", text: "The truly free one is neither bound nor liberated.\nFor him there is no goal, no practice, no result.\nHe is neither wise nor ignorant.\nHe is beyond all states." },
      { id: "17.2", number: "17.2", speaker: "Ashtavakra said:", text: "The free one does not say 'I am free'.\nFar beyond such notions,\nhe abides in perfect indifference,\nlike space itself." },
      { id: "17.3", number: "17.3", speaker: "Ashtavakra said:", text: "The free one acts without intention,\nspeaks without purpose,\nlives without design.\nYet all is perfect and complete." },
      { id: "17.4", number: "17.4", speaker: "Ashtavakra said:", text: "There is no one who is free or bound.\nFreedom and bondage are concepts\nin the mind alone.\nIn reality, all is One." },
    ]
  },
  {
    id: 18,
    title: "100 Verses of Pure Non-Duality",
    verses: [
      { id: "18.1", number: "18.1", speaker: "Ashtavakra said:", text: "You are not the mind, intellect, thought or ego.\nYou are not the ears, tongue, nose or eyes.\nYou are not the ether, earth, fire or air.\nYou are Consciousness itself—the witness of all." },
      { id: "18.2", number: "18.2", speaker: "Ashtavakra said:", text: "You are not the vital breath or the five airs.\nYou are not the seven elements of the body.\nYou are Consciousness itself—the witness of all.\nRealize this and be free." },
      { id: "18.3", number: "18.3", speaker: "Ashtavakra said:", text: "Attachment and aversion, fear and anger,\nare all creations of the mind.\nThey do not touch your true nature.\nYou are forever pure and unblemished." },
      { id: "18.4", number: "18.4", speaker: "Ashtavakra said:", text: "The universe is like a dream.\nWhen you wake, you realize it never existed.\nYou were never born, you will never die.\nYou are eternal, unchanged Consciousness." },
      { id: "18.5", number: "18.5", speaker: "Ashtavakra said:", text: "What is seen is not other than the seer.\nWhat is heard is not other than the hearer.\nWhat is thought is not other than the thinker.\nAll divisions are false—there is only One." },
    ]
  },
  {
    id: 19,
    title: "Questions Revealing Absence",
    verses: [
      { id: "19.1", number: "19.1", speaker: "Janaka said:", text: "Who am I that seeks?\nWhere is the goal I pursue?\nWhat is bondage?\nWhat is liberation?" },
      { id: "19.2", number: "19.2", speaker: "Janaka said:", text: "What is the mind that binds me?\nWhat is the knowledge that frees me?\nWho is the one who practices?\nWho reaps the fruits?" },
      { id: "19.3", number: "19.3", speaker: "Janaka said:", text: "Is there a seeker seeking?\nIs there a path to walk?\nIs there a destination to reach?\nOr is all this but illusion?" },
      { id: "19.4", number: "19.4", speaker: "Janaka said:", text: "When all questions vanish,\nwhat remains?\nWhen all seeking ceases,\nwhat is found?" },
    ]
  },
  {
    id: 20,
    title: "Dissolution and Meaninglessness",
    verses: [
      { id: "20.1", number: "20.1", speaker: "Janaka said:", text: "What can be said of that\nwhich cannot be spoken?\nWhat can be known of that\nwhich transcends knowing?" },
      { id: "20.2", number: "20.2", speaker: "Janaka said:", text: "Where is the teacher?\nWhere is the teaching?\nWhere is the disciple?\nAll have dissolved into meaninglessness." },
      { id: "20.3", number: "20.3", speaker: "Janaka said:", text: "No more can be said.\nAll words have failed.\nAll concepts have vanished.\nOnly silence remains." },
    ]
  },
];
