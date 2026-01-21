'use client'

import React, { useState, useRef } from 'react';

// Timeline data structure
const timelineData = {
  eras: [
    {
      id: 1,
      name: "The Beginning of the End",
      years: "1844-1869",
      description: "The period from 1844 to 1869 marks the beginning of earth's final era. In 1844, Christ entered the Most Holy Place of the heavenly sanctuary to begin the work of investigative judgment.",
      introQuote: {
        text: "The enemy has worked, and he is working still. He is come down in great power, and the Spirit of God is being withdrawn from the earth.",
        source: "Ellen G. White, Sermons and Talks 1:109 (1889)"
      },
      events: [
        { year: 1844, events: [
          { type: "prophecy", text: "PROPHETIC MILESTONE: End of the 2,300-day prophecy (Daniel 8:14); Christ enters the Most Holy Place to begin the investigative judgment" },
          { type: "prophecy", text: "October 22: The Great Disappointment—Millerites expected Christ's return" },
          { type: "flood", text: "GREAT FLOOD OF 1844: Largest flood in recorded history of the Missouri and Upper Mississippi Rivers; widespread destruction" },
          { type: "flood", text: "June: Mississippi River floods St. Louis and surrounding areas" },
          { type: "disease", text: "Wyandot Indians suffer 100+ deaths from diseases following the flood" },
        ]},
        { year: 1845, events: [
          { type: "fire", text: "July 14: Massive fire in New York City; saltpeter explosion kills unknown number; 1,000 buildings destroyed" },
          { type: "famine", text: "Irish Potato Famine begins (1845-1852)—will kill approximately 1 million" },
          { type: "storm", text: "September: Hurricane strikes Florida, causes significant damage" },
        ]},
        { year: 1846, events: [
          { type: "famine", text: "Irish Famine intensifies; mass emigration begins" },
          { type: "war", text: "Mexican-American War begins (1846-1848)" },
          { type: "earthquake", text: "June: Major earthquake strikes Mexico" },
        ], quote: { text: "In the days of Noah the overwhelming majority was opposed to the truth, and enamored with a tissue of falsehoods. The land was filled with violence. War, crime, murder, was the order of the day. Just so will it be before Christ's second coming.", source: "Ellen G. White, The S.D.A. Bible Commentary 1:1090 (1891)" }},
        { year: 1847, events: [
          { type: "famine", text: "Irish Famine reaches peak mortality; \"Black '47\" claims hundreds of thousands" },
          { type: "crime", text: "Donner Party tragedy in Sierra Nevada—starvation and cannibalism" },
          { type: "disease", text: "Typhus epidemic sweeps through Ireland and emigrant ships" },
        ]},
        { year: 1848, events: [
          { type: "war", text: "Revolutions sweep across Europe—France, Germany, Italy, Austria-Hungary" },
          { type: "crime", text: "California Gold Rush begins—lawlessness and violence in mining camps" },
          { type: "earthquake", text: "Major earthquake in Turkey" },
          { type: "disease", text: "Cholera epidemic begins spreading worldwide (1848-1849)" },
        ]},
        { year: 1849, events: [
          { type: "disease", text: "Cholera pandemic reaches North America; kills tens of thousands" },
          { type: "crime", text: "Gold Rush violence intensifies in California" },
          { type: "fire", text: "Major fire destroys much of St. Louis" },
        ]},
        { year: 1850, events: [
          { type: "disaster", text: "June 17: Steamer Griffith fire on Lake Erie; all 300 aboard perish" },
          { type: "disease", text: "Cholera epidemic continues; reaches epidemic proportions in many U.S. cities" },
          { type: "fire", text: "Great Fire of San Francisco (first of many)" },
        ], quote: { text: "The terrible reports we hear of murders and robberies, of railway accidents and deeds of violence, tell the story that the end of all things is at hand.", source: "Ellen G. White, Letter 308, 1907" }},
        { year: 1854, events: [
          { type: "disaster", text: "Wreck of the Yankee Blade" },
          { type: "disaster", text: "November 13: Immigrant ship New Era wrecks off New Jersey coast; 300+ dead" },
          { type: "disease", text: "Cholera epidemic in London; Dr. John Snow traces source" },
          { type: "war", text: "Crimean War intensifies; massive casualties" },
        ], quote: { text: "God has not restrained the powers of darkness from carrying forward their deadly work of vitiating the air, one of the sources of life and nutrition, with a deadly miasma.", source: "Ellen G. White, Selected Messages 3:391 (1891)" }},
        { year: 1857, events: [
          { type: "earthquake", text: "January 9: Fort Tejon earthquake (M7.9)—largest in Southern California history" },
          { type: "disaster", text: "September 12: SS Central America sinks in hurricane; 425+ dead; $2 million in gold lost" },
          { type: "economic", text: "Financial Panic of 1857 causes widespread economic distress" },
          { type: "crime", text: "Mountain Meadows Massacre—120 emigrants killed" },
        ]},
        { year: 1858, events: [
          { type: "fire", text: "Disastrous fires in Downieville, California" },
          { type: "disaster", text: "Shipwreck of the Lucas" },
          { type: "disease", text: "Major epidemic in Central America" },
        ], quote: { text: "Satan is working in the atmosphere; he is poisoning the atmosphere, and here we are dependent upon God for our lives—our present and eternal lives.", source: "Ellen G. White, Selected Messages 2:52 (1890)" }},
        { year: 1859, events: [
          { type: "disaster", text: "September 1-2: Carrington Event—massive solar storm; telegraph systems fail worldwide" },
          { type: "war", text: "John Brown's raid on Harpers Ferry—prelude to Civil War" },
        ]},
        { year: 1861, events: [
          { type: "war", text: "AMERICAN CIVIL WAR BEGINS—will claim 620,000+ lives" },
          { type: "flood", text: "Major flood in California (1861-1862)" },
          { type: "war", text: "July: First Battle of Bull Run—590 dead" },
        ], quote: { text: "War, crime, murder, was the order of the day. Just so will it be before Christ's second coming.", source: "Ellen G. White, The S.D.A. Bible Commentary 1:1090 (1891)" }},
        { year: 1862, events: [
          { type: "flood", text: "California Great Flood transforms Central Valley into inland sea" },
          { type: "war", text: "Battle of Antietam—bloodiest single day in American history; 22,717 casualties" },
          { type: "war", text: "Sioux Uprising in Minnesota; 500+ settlers killed" },
        ]},
        { year: 1863, events: [
          { type: "war", text: "Battle of Gettysburg—51,000 casualties" },
          { type: "crime", text: "New York City Draft Riots—120+ dead" },
          { type: "prophecy", text: "May 21: Seventh-day Adventist Church officially organized" },
        ]},
        { year: 1865, events: [
          { type: "crime", text: "April 14: President Abraham Lincoln assassinated" },
          { type: "disaster", text: "April 27: Steamboat Sultana explodes; 1,800 dead—worst maritime disaster in U.S. history" },
          { type: "war", text: "Civil War ends—total dead: 620,000+" },
        ], quote: { text: "Famines will increase. Pestilences will sweep away thousands. Dangers are all around us from the powers without and satanic workings within, but the restraining power of God is now being exercised.", source: "Ellen G. White, Manuscript Releases 19:382 (1897)" }},
        { year: 1868, events: [
          { type: "earthquake", text: "October 21: Hayward earthquake devastates San Francisco Bay area" },
          { type: "earthquake", text: "August: Peru-Chile earthquake and tsunami; 25,000+ dead" },
        ]},
        { year: 1869, events: [
          { type: "storm", text: "October 4-5: Saxby Gale strikes Bay of Fundy region" },
          { type: "economic", text: "Black Friday financial panic" },
        ], quote: { text: "The Lord will arise to shake terribly the earth. We shall see troubles on all sides. Thousands of ships will be hurled into the depths of the sea. Navies will go down, and human lives will be sacrificed by millions.", source: "Ellen G. White, Messages to Young People, 89, 90 (1890)" }},
      ]
    },
    {
      id: 2,
      name: "The Gathering Storm",
      years: "1870-1899",
      description: "The final three decades of the nineteenth century witnessed an alarming acceleration of disasters and violence. This period also saw the critical Sunday law crisis of 1892-1893.",
      introQuote: {
        text: "The Lord gives warnings to the inhabitants of the earth, as in the Chicago fire and the fires in Melbourne, London, and the city of New York.",
        source: "Ellen G. White, Manuscript 127, 1897"
      },
      events: [
        { year: 1871, events: [
          { type: "fire", text: "October 8-10: GREAT CHICAGO FIRE—300 dead, 100,000 homeless, $200 million damage" },
          { type: "fire", text: "October 8: PESHTIGO FIRE—deadliest wildfire in U.S. history; 1,500-2,500 dead" },
          { type: "fire", text: "Same night: Multiple fires across Wisconsin, Michigan, Illinois" },
          { type: "famine", text: "Persian Famine (1871-1872)—2 million dead" },
          { type: "flood", text: "Vietnam floods kill estimated 100,000 in Red River delta" },
        ], quote: { text: "I have seen the most costly structures in buildings erected and supposed to be fireproof, and just as Sodom perished in the flames of God's vengeance so will these proud structures become ashes.", source: "Ellen G. White, Selected Messages 3:418 (1901)" }},
        { year: 1873, events: [
          { type: "economic", text: "Financial Panic of 1873—triggers global economic depression" },
          { type: "disease", text: "Yellow fever epidemic in multiple cities" },
        ]},
        { year: 1874, events: [
          { type: "disaster", text: "Grasshopper plague devastates Great Plains; millions of acres destroyed" },
          { type: "storm", text: "Typhoon in Hong Kong; thousands dead" },
          { type: "flood", text: "Mill River Dam failure—Massachusetts; 139 dead" },
        ], quote: { text: "The perversity and cruelty of men will reach such a height that God will reveal Himself in His majesty. Very soon the wickedness of the world will have reached its limit.", source: "Ellen G. White, The Upward Look, 334 (1903)" }},
        { year: 1876, events: [
          { type: "war", text: "June 25: Battle of Little Bighorn—Custer and 268 soldiers killed" },
          { type: "earthquake", text: "July 28: TANGSHAN EARTHQUAKE (China)—242,769+ dead; possibly 655,000+" },
          { type: "fire", text: "Brooklyn Theater fire—278 dead" },
        ]},
        { year: 1878, events: [
          { type: "disease", text: "Yellow fever epidemic in Memphis—5,000+ dead" },
          { type: "disaster", text: "Princess Alice steamship disaster—650 dead (England)" },
        ], quote: { text: "The earth's crust will be rent by the outbursts of the elements concealed in the bowels of the earth.", source: "Ellen G. White, Manuscript Releases 3:208 (1891)" }},
        { year: 1881, events: [
          { type: "crime", text: "July 2: President James Garfield shot (dies September 19)" },
          { type: "storm", text: "Haiphong Typhoon—300,000 dead (Vietnam)" },
          { type: "crime", text: "Anti-Jewish pogroms begin in Russia" },
        ]},
        { year: 1883, events: [
          { type: "volcano", text: "August 27: KRAKATOA ERUPTION—36,000+ dead; loudest sound in recorded history; tsunamis reach 100+ feet" },
          { type: "fire", text: "Newhall House fire—71 dead (Milwaukee)" },
        ], quote: { text: "Before the Son of man appears in the clouds of heaven everything in nature will be convulsed. Lightning from heaven uniting with the fire in the earth will cause the mountains to burn like a furnace.", source: "Ellen G. White, The S.D.A. Bible Commentary 7:946 (1907)" }},
        { year: 1886, events: [
          { type: "earthquake", text: "September 1: CHARLESTON EARTHQUAKE—60 dead; largest earthquake in eastern U.S." },
          { type: "crime", text: "Haymarket Affair—bombing and violence in Chicago" },
        ]},
        { year: 1887, events: [
          { type: "flood", text: "September 28: YELLOW RIVER FLOOD (China)—900,000 to 2 million dead" },
          { type: "disaster", text: "Chatsworth train wreck—82 dead" },
        ], quote: { text: "And these very things will increase until the close of this earth's history.", source: "Ellen G. White, Sermons and Talks 1:109 (1889)" }},
        { year: 1888, events: [
          { type: "storm", text: "March 11-14: GREAT BLIZZARD OF 1888—400+ dead; East Coast paralyzed" },
          { type: "storm", text: "Schoolhouse Blizzard—January; 235+ dead in Great Plains" },
          { type: "prophecy", text: "MINNEAPOLIS GENERAL CONFERENCE—1888 Message of Righteousness by Faith" },
        ]},
        { year: 1889, events: [
          { type: "flood", text: "May 31: JOHNSTOWN FLOOD—2,209 dead; worst disaster in U.S. history to that point" },
          { type: "fire", text: "Seattle fire destroys 25 city blocks" },
          { type: "fire", text: "Spokane fire destroys 32 city blocks" },
        ], quote: { text: "We have only to look at Johnstown. He did not prevent the devil from wiping that whole city out of existence. And these very things will increase until the close of this earth's history.", source: "Ellen G. White, Sermons and Talks 1:109 (1889)" }},
        { year: 1890, events: [
          { type: "crime", text: "December 29: WOUNDED KNEE MASSACRE—250-300 Lakota killed" },
          { type: "storm", text: "Louisville tornado—100+ dead" },
          { type: "disease", text: "Major influenza pandemic (1889-1890)—1 million dead worldwide" },
        ]},
        { year: 1892, events: [
          { type: "prophecy", text: "CRITICAL PROPHETIC MILESTONE: Sunday law legislation passes Congress (Columbian Exposition)" },
          { type: "prophecy", text: "Protestant churches unite with Catholics to petition for Sunday enforcement" },
          { type: "prophecy", text: "A.T. Jones testifies before Congress against Sunday laws" },
          { type: "crime", text: "Homestead Steel Strike—violence between workers and Pinkertons" },
          { type: "disease", text: "Cholera epidemic in Hamburg, Germany—8,600+ dead" },
        ], quote: { text: "The time is now come when one moment we may be on solid earth, the next the earth may be heaving beneath our feet. Earthquakes will take place when least expected.", source: "Ellen G. White, Testimonies to Ministers, 421 (1896)" }},
        { year: 1893, events: [
          { type: "prophecy", text: "Sunday law enforcement continues" },
          { type: "economic", text: "Financial Panic of 1893—major depression begins" },
          { type: "storm", text: "Hurricane destroys Sea Islands, South Carolina—1,000-2,000 dead" },
          { type: "storm", text: "Cheniere Caminada hurricane—2,000 dead (Louisiana)" },
        ]},
        { year: 1894, events: [
          { type: "fire", text: "Great Hinckley Fire—418 dead (Minnesota)" },
          { type: "crime", text: "Pullman Strike—nationwide railroad stoppage; Federal troops deployed" },
        ]},
        { year: 1896, events: [
          { type: "earthquake", text: "June 15: SANRIKU EARTHQUAKE AND TSUNAMI (Japan)—27,000 dead" },
          { type: "storm", text: "St. Louis tornado—255 dead" },
        ], quote: { text: "There will be mighty earthquakes and great destruction of human life.", source: "Ellen G. White, The S.D.A. Bible Commentary 7:946 (1907)" }},
        { year: 1898, events: [
          { type: "war", text: "February 15: USS Maine explosion—266 dead; triggers Spanish-American War" },
          { type: "war", text: "Spanish-American War—2,446 U.S. deaths" },
        ]},
        { year: 1899, events: [
          { type: "storm", text: "San Ciriaco Hurricane—3,000+ dead (Puerto Rico)" },
          { type: "storm", text: "Great Blizzard of 1899—100+ dead in South" },
          { type: "war", text: "Philippine-American War begins" },
        ], quote: { text: "Light has been given me that the cities will be filled with confusion, violence, and crime, and that these things will increase till the end of this earth's history.", source: "Ellen G. White, Testimonies for the Church 7:84 (1902)" }},
      ]
    },
    {
      id: 3,
      name: "Calamity Accelerates",
      years: "1900-1929",
      description: "The first three decades of the twentieth century brought unprecedented disasters and violence. World War I killed 17 million, followed by the Spanish Flu which killed 50-100 million.",
      introQuote: {
        text: "Satan has control of all whom God does not especially guard. He will favor and prosper some in order to further his own designs, and he will bring trouble upon others... While appearing to the children of men as a great physician who can heal all their maladies, he will bring disease and disaster, until populous cities are reduced to ruin and desolation.",
        source: "Ellen G. White, The Great Controversy, 589-590"
      },
      events: [
        { year: 1900, events: [
          { type: "storm", text: "September 8: GALVESTON HURRICANE—8,000-12,000 dead; DEADLIEST NATURAL DISASTER IN U.S. HISTORY" },
          { type: "war", text: "Boxer Rebellion in China" },
          { type: "fire", text: "Great Fire of Hoboken—326 dead" },
          { type: "disaster", text: "Scofield Mine disaster—200 dead" },
        ]},
        { year: 1901, events: [
          { type: "crime", text: "September 6: President William McKinley assassinated" },
          { type: "fire", text: "Jacksonville, Florida fire destroys 146 city blocks; 10,000 homeless" },
          { type: "disease", text: "Bubonic plague outbreak in San Francisco" },
        ]},
        { year: 1902, events: [
          { type: "volcano", text: "May 8: MOUNT PELÉE ERUPTION (Martinique)—29,000+ dead; St. Pierre destroyed" },
          { type: "volcano", text: "May 7: Soufrière volcano—1,680 dead (St. Vincent)" },
          { type: "volcano", text: "Santa María volcano (Guatemala)—6,000 dead" },
        ], quote: { text: "O that God's people had a sense of the impending destruction of thousands of cities, now almost given to idolatry.", source: "Ellen G. White, Evangelism, 29 (1903)" }},
        { year: 1903, events: [
          { type: "fire", text: "December 30: Iroquois Theatre fire (Chicago)—602 dead; deadliest theater fire in U.S. history" },
          { type: "flood", text: "Heppner Flood—247 dead (Oregon)" },
        ]},
        { year: 1904, events: [
          { type: "disaster", text: "June 15: General Slocum steamship fire—1,021 dead (worst NYC disaster until 9/11)" },
          { type: "fire", text: "February 7: Great Baltimore Fire—1,500+ buildings destroyed" },
          { type: "war", text: "Russo-Japanese War begins" },
        ]},
        { year: 1905, events: [
          { type: "earthquake", text: "April 8: KANGRA EARTHQUAKE (India)—19,000+ dead" },
          { type: "war", text: "Russian Revolution of 1905—thousands killed" },
        ]},
        { year: 1906, events: [
          { type: "earthquake", text: "April 18: SAN FRANCISCO EARTHQUAKE AND FIRE—3,000+ dead; 80% of city destroyed; 250,000 homeless" },
          { type: "earthquake", text: "August 17: Valparaíso earthquake (Chile)—3,882 dead" },
          { type: "storm", text: "September: Typhoon kills 10,000+ in Hong Kong" },
        ], quote: { text: "San Francisco and Oakland are becoming as Sodom and Gomorrah, and the Lord will visit them. Not far hence they will suffer under His judgments.", source: "Ellen G. White, Manuscript 30, 1903" }},
        { year: 1907, events: [
          { type: "disaster", text: "December 6: Monongah Mine disaster—362 dead; worst mining disaster in U.S. history" },
          { type: "economic", text: "Financial Panic of 1907" },
          { type: "earthquake", text: "Kingston, Jamaica earthquake—1,000 dead" },
        ]},
        { year: 1908, events: [
          { type: "earthquake", text: "December 28: MESSINA EARTHQUAKE (Italy)—75,000-200,000 dead" },
          { type: "fire", text: "Collinwood school fire—174 dead (Ohio)" },
        ]},
        { year: 1909, events: [
          { type: "disaster", text: "Cherry Mine disaster—259 dead (Illinois)" },
          { type: "storm", text: "Tornado outbreak across Illinois" },
        ], quote: { text: "We are on the very verge of the time of trouble, and perplexities that are scarcely dreamed of are before us.", source: "Ellen G. White, Testimonies for the Church 9:43 (1909)" }},
        { year: 1910, events: [
          { type: "fire", text: "August 20-21: GREAT FIRE OF 1910—85 dead; 3 million acres burned (Idaho/Montana)" },
          { type: "crime", text: "Los Angeles Times bombing—21 dead" },
          { type: "war", text: "Mexican Revolution intensifies—millions will die" },
        ]},
        { year: 1911, events: [
          { type: "fire", text: "March 25: TRIANGLE SHIRTWAIST FACTORY FIRE—146 dead (New York)" },
          { type: "flood", text: "Yangtze River flood (China)—100,000+ dead" },
        ]},
        { year: 1912, events: [
          { type: "disaster", text: "April 15: RMS TITANIC sinks—1,517 dead" },
          { type: "war", text: "Balkan Wars begin—over 300,000 will die" },
        ]},
        { year: 1913, events: [
          { type: "flood", text: "March 21-26: GREAT FLOOD OF 1913—428 dead (Ohio/Indiana)" },
          { type: "disaster", text: "October 22: Dawson, New Mexico mine explosion—263 dead" },
          { type: "storm", text: "Omaha tornado—103 dead" },
        ], quote: { text: "Fires will break out unexpectedly and no human effort will be able to quench them. The palaces of earth will be swept away in the fury of the flames.", source: "Ellen G. White, Messages to Young People, 89, 90 (1890)" }},
        { year: 1914, events: [
          { type: "war", text: "WORLD WAR I BEGINS—will kill 17 million" },
          { type: "crime", text: "April 20: Ludlow Massacre—21 dead including 11 children" },
          { type: "disaster", text: "May 29: Empress of Ireland sinks—1,012 dead" },
        ]},
        { year: 1915, events: [
          { type: "war", text: "May 7: RMS Lusitania torpedoed—1,198 dead" },
          { type: "storm", text: "August: Galveston Hurricane—275-400 dead" },
          { type: "crime", text: "Armenian Genocide begins—1.5 million will be killed" },
          { type: "disaster", text: "July 24: Eastland disaster (Chicago)—844 dead" },
        ]},
        { year: 1916, events: [
          { type: "war", text: "July 1: Battle of the Somme begins—1 million casualties" },
          { type: "disease", text: "Polio epidemic—27,000 cases in U.S." },
        ]},
        { year: 1917, events: [
          { type: "disaster", text: "December 6: HALIFAX EXPLOSION—2,000 dead; largest man-made explosion before nuclear age" },
          { type: "war", text: "April 6: United States enters World War I" },
          { type: "war", text: "Russian Revolution—millions will die in subsequent chaos" },
        ], quote: { text: "Human lives will be sacrificed by millions.", source: "Ellen G. White, Messages to Young People, 89, 90 (1890)" }},
        { year: 1918, events: [
          { type: "disease", text: "SPANISH FLU PANDEMIC BEGINS—will kill 50-100 million worldwide; deadliest pandemic in history" },
          { type: "war", text: "November 11: World War I ends—17 million total dead" },
          { type: "fire", text: "Cloquet Fire (Minnesota)—453 dead" },
          { type: "disease", text: "October: Flu kills 195,000 Americans in single month" },
        ]},
        { year: 1919, events: [
          { type: "crime", text: "Race riots in multiple cities (\"Red Summer\")" },
          { type: "disease", text: "Spanish Flu continues—total U.S. dead: 675,000" },
          { type: "disaster", text: "January 15: Great Molasses Flood (Boston)—21 dead" },
        ]},
        { year: 1920, events: [
          { type: "earthquake", text: "December 16: HAIYUAN EARTHQUAKE (China)—200,000+ dead" },
          { type: "crime", text: "September 16: Wall Street bombing—38 dead" },
        ]},
        { year: 1921, events: [
          { type: "crime", text: "May 31-June 1: TULSA RACE MASSACRE—100-300 dead; \"Black Wall Street\" destroyed" },
          { type: "famine", text: "Russian Famine begins—5 million will die" },
        ], quote: { text: "When God's restraining hand is removed, the destroyer begins his work. Then in our cities the greatest calamities will come.", source: "Ellen G. White, Manuscript Releases 3:314 (1897)" }},
        { year: 1923, events: [
          { type: "earthquake", text: "September 1: GREAT KANTO EARTHQUAKE (Japan)—142,800 dead; Tokyo and Yokohama devastated" },
          { type: "crime", text: "Rosewood Massacre—Florida" },
        ]},
        { year: 1925, events: [
          { type: "storm", text: "March 18: TRI-STATE TORNADO—695 dead; deadliest tornado in U.S. history" },
        ], quote: { text: "Terrible shocks will come upon the earth, and the lordly palaces erected at great expense will certainly become heaps of ruins.", source: "Ellen G. White, Manuscript Releases 3:312 (1891)" }},
        { year: 1927, events: [
          { type: "flood", text: "April-August: GREAT MISSISSIPPI FLOOD—500+ dead; 700,000 displaced" },
          { type: "crime", text: "May: Bath School disaster—44 dead (Michigan; first mass school murder)" },
        ]},
        { year: 1928, events: [
          { type: "storm", text: "September 16: LAKE OKEECHOBEE HURRICANE—2,500+ dead" },
          { type: "flood", text: "St. Francis Dam failure (California)—600 dead" },
        ]},
        { year: 1929, events: [
          { type: "economic", text: "October 29: \"BLACK TUESDAY\"—Stock market crash; Great Depression begins" },
          { type: "crime", text: "St. Valentine's Day Massacre—7 dead" },
        ], quote: { text: "The world is becoming more and more lawless. Soon great trouble will arise among the nations—trouble that will not cease until Jesus comes.", source: "Ellen G. White, The Review and Herald, February 11, 1904" }},
      ]
    },
    {
      id: 4,
      name: "Global Catastrophe",
      years: "1930-1959",
      description: "The 1930s brought the Great Depression and the Dust Bowl. The 1940s saw World War II claim 70-85 million lives, including the Holocaust's 6 million Jews and the atomic devastation of Hiroshima and Nagasaki.",
      introQuote: {
        text: "In the last scenes of this earth's history war will rage. There will be pestilence, plague and famine. The waters of the deep will overflow their boundaries. Property and life will be destroyed by fire and flood.",
        source: "Ellen G. White, Maranatha, 174 (1897)"
      },
      events: [
        { year: 1931, events: [
          { type: "flood", text: "July-November: CHINA FLOODS—1-4 MILLION DEAD; deadliest natural disaster of 20th century" },
          { type: "earthquake", text: "Napier, New Zealand earthquake—256 dead" },
        ]},
        { year: 1934, events: [
          { type: "storm", text: "\"BLACK SUNDAY\" Dust Storm devastates Great Plains" },
          { type: "disaster", text: "SS Morro Castle fire—137 dead" },
        ], quote: { text: "The end is near and every city is to be turned upside down every way. There will be confusion in every city. Everything that can be shaken is to be shaken.", source: "Ellen G. White, Manuscript Releases 1:248 (1902)" }},
        { year: 1935, events: [
          { type: "storm", text: "September 2: Labor Day Hurricane—408 dead (Florida Keys)" },
          { type: "earthquake", text: "May 31: QUETTA EARTHQUAKE (Pakistan)—30,000-60,000 dead" },
        ]},
        { year: 1936, events: [
          { type: "storm", text: "Tupelo-Gainesville tornado outbreak—454 dead" },
          { type: "disaster", text: "Great North American Heat Wave—thousands dead" },
          { type: "war", text: "Spanish Civil War begins—500,000 will die" },
        ]},
        { year: 1937, events: [
          { type: "disaster", text: "May 6: Hindenburg disaster—36 dead" },
          { type: "disaster", text: "New London school explosion—295 dead" },
          { type: "flood", text: "Ohio River flood—385 dead" },
        ]},
        { year: 1938, events: [
          { type: "storm", text: "September 21: GREAT NEW ENGLAND HURRICANE—700 dead" },
          { type: "flood", text: "Yellow River flood (deliberate)—500,000-800,000 dead" },
          { type: "crime", text: "Kristallnacht—91 Jews killed; beginning of Holocaust" },
        ]},
        { year: 1939, events: [
          { type: "war", text: "September 1: WORLD WAR II BEGINS—will kill 70-85 million" },
          { type: "earthquake", text: "December 26: Erzincan earthquake (Turkey)—33,000 dead" },
        ], quote: { text: "In quick succession the judgments of God will follow one another—fire, and flood, and earthquake, with war and bloodshed.", source: "Ellen G. White, Prophets and Kings, 278 (c. 1914)" }},
        { year: 1941, events: [
          { type: "war", text: "December 7: PEARL HARBOR ATTACK—2,403 dead; U.S. enters WWII" },
          { type: "war", text: "June 22: Germany invades Soviet Union" },
          { type: "crime", text: "Holocaust begins in earnest" },
        ]},
        { year: 1942, events: [
          { type: "fire", text: "Cocoanut Grove fire (Boston)—492 dead" },
          { type: "war", text: "Battle of Stalingrad begins—2 million casualties" },
          { type: "war", text: "Bataan Death March—10,000 dead" },
        ]},
        { year: 1943, events: [
          { type: "famine", text: "Bengal Famine—2-3 million dead (India)" },
          { type: "war", text: "Warsaw Ghetto Uprising" },
        ]},
        { year: 1944, events: [
          { type: "war", text: "June 6: D-Day invasion—10,000+ Allied casualties" },
          { type: "fire", text: "July 6: Hartford circus fire—167 dead" },
          { type: "storm", text: "Great Atlantic Hurricane—390 dead" },
        ], quote: { text: "Navies will go down, and human lives will be sacrificed by millions.", source: "Ellen G. White, Messages to Young People, 89, 90 (1890)" }},
        { year: 1945, events: [
          { type: "war", text: "August 6: HIROSHIMA ATOMIC BOMB—80,000 immediate dead; 140,000 total" },
          { type: "war", text: "August 9: NAGASAKI ATOMIC BOMB—40,000 immediate dead; 70,000 total" },
          { type: "war", text: "May 8: World War II ends in Europe—TOTAL DEAD: 70-85 MILLION" },
        ]},
        { year: 1947, events: [
          { type: "disaster", text: "April 16-17: TEXAS CITY DISASTER—581 dead; ship explosion" },
          { type: "storm", text: "April 9: Woodward-Glazier tornado—181 dead" },
          { type: "war", text: "Partition of India—1-2 million killed" },
        ]},
        { year: 1948, events: [
          { type: "earthquake", text: "June 28: Fukui earthquake (Japan)—3,769 dead" },
          { type: "war", text: "Arab-Israeli War begins—over 10,000 dead" },
        ]},
        { year: 1949, events: [
          { type: "earthquake", text: "August 5: Ambato earthquake (Ecuador)—5,050 dead" },
          { type: "war", text: "Chinese Communist Revolution—millions killed" },
        ], quote: { text: "The time of trouble, which is to increase until the end, is very near at hand. We have no time to lose. The world is stirred with the spirit of war.", source: "Ellen G. White, The Review and Herald, November 24, 1904" }},
        { year: 1950, events: [
          { type: "earthquake", text: "August 15: ASSAM EARTHQUAKE (India)—1,526 dead; M8.6" },
          { type: "war", text: "June 25: KOREAN WAR BEGINS—3 million will die" },
        ]},
        { year: 1952, events: [
          { type: "earthquake", text: "November 4: Kamchatka earthquake (Russia)—M9.0; one of largest ever recorded" },
          { type: "disease", text: "December 5-9: GREAT SMOG OF LONDON—4,000 immediate dead; 12,000 total" },
        ]},
        { year: 1953, events: [
          { type: "flood", text: "North Sea flood—2,551 dead (Netherlands, UK, Belgium)" },
          { type: "storm", text: "May 11: WACO TORNADO—114 dead" },
          { type: "storm", text: "June 8: Flint-Worcester tornado outbreak—247 dead" },
        ]},
        { year: 1957, events: [
          { type: "earthquake", text: "March 9: Andreanof Islands earthquake—M9.1" },
          { type: "storm", text: "Hurricane Audrey—416 dead" },
          { type: "disease", text: "Asian Flu pandemic begins—1-4 million will die" },
        ]},
        { year: 1958, events: [
          { type: "flood", text: "July 9: Lituya Bay mega-tsunami—1,720 foot wave; 5 dead" },
          { type: "fire", text: "December 1: Our Lady of the Angels School fire—92 dead" },
          { type: "famine", text: "Great Leap Forward begins in China—45 million will die" },
        ]},
        { year: 1959, events: [
          { type: "storm", text: "Typhoon Vera (Japan)—5,000+ dead" },
          { type: "famine", text: "Chinese Famine intensifies" },
        ], quote: { text: "I am bidden to declare the message that cities full of transgression, and sinful in the extreme, will be destroyed by earthquakes, by fire, by flood.", source: "Ellen G. White, Evangelism, 27 (April 27, 1906)" }},
      ]
    },
    {
      id: 5,
      name: "Modern Catastrophe",
      years: "1960-1989",
      description: "The 1960s through 1980s brought the largest earthquakes ever recorded, devastating hurricanes, volcanic eruptions, and continued warfare. The 1970 Bhola cyclone killed 300,000-500,000 in a single night.",
      introQuote: {
        text: "Even now Satan is at work. In accidents and calamities by sea and by land, in great conflagrations, in fierce tornadoes and terrific hailstorms, in tempests, floods, cyclones, tidal waves, and earthquakes, in every place and in a thousand forms, Satan is exercising his power... These visitations are to become more and more frequent and disastrous.",
        source: "Ellen G. White, The Great Controversy, 589-590"
      },
      events: [
        { year: 1960, events: [
          { type: "earthquake", text: "May 22: GREAT CHILEAN EARTHQUAKE—M9.5; LARGEST EARTHQUAKE EVER RECORDED; 1,655 dead" },
          { type: "earthquake", text: "February 29: Agadir earthquake (Morocco)—12,000-15,000 dead" },
        ]},
        { year: 1963, events: [
          { type: "crime", text: "November 22: PRESIDENT JOHN F. KENNEDY ASSASSINATED" },
          { type: "flood", text: "October 9: Vajont Dam disaster (Italy)—2,000 dead" },
          { type: "crime", text: "Birmingham church bombing—4 children killed" },
        ]},
        { year: 1964, events: [
          { type: "earthquake", text: "March 27: GREAT ALASKA EARTHQUAKE—M9.2; 131 dead; second largest quake ever recorded" },
          { type: "war", text: "Gulf of Tonkin incident—Vietnam War escalates" },
        ], quote: { text: "Disasters by rail will become more and more frequent. Confusion, collision, and death without a moment's warning will occur on the great lines of travel.", source: "Ellen G. White, Messages to Young People, 89, 90 (1890)" }},
        { year: 1965, events: [
          { type: "storm", text: "Palm Sunday Tornado Outbreak—271 dead" },
          { type: "storm", text: "Hurricane Betsy—81 dead" },
          { type: "crime", text: "Watts Riots—34 dead" },
          { type: "crime", text: "Indonesia mass killings begin—500,000-1 million dead" },
        ]},
        { year: 1966, events: [
          { type: "disaster", text: "October 21: Aberfan disaster (Wales)—144 dead; coal slag engulfs school" },
          { type: "crime", text: "August: Texas Tower mass shooting—17 dead" },
        ]},
        { year: 1968, events: [
          { type: "crime", text: "April 4: MARTIN LUTHER KING JR. ASSASSINATED" },
          { type: "crime", text: "June 5: ROBERT F. KENNEDY ASSASSINATED" },
          { type: "war", text: "My Lai Massacre (Vietnam)—504 killed" },
          { type: "disease", text: "Hong Kong flu pandemic begins—1 million will die" },
        ]},
        { year: 1969, events: [
          { type: "storm", text: "Hurricane Camille—259 dead (Category 5)" },
          { type: "crime", text: "Manson Family murders" },
        ], quote: { text: "The reports of fraudulent transactions, murders, and crimes of every kind are coming to us daily. Iniquity is becoming so common a thing that it no longer shocks the senses as it once did.", source: "Ellen G. White, Letter 258, 1907" }},
        { year: 1970, events: [
          { type: "storm", text: "November 12: BHOLA CYCLONE—300,000-500,000 dead; deadliest tropical cyclone in history" },
          { type: "earthquake", text: "May 31: Ancash earthquake (Peru)—70,000 dead" },
          { type: "crime", text: "Kent State shootings—4 students killed" },
        ]},
        { year: 1971, events: [
          { type: "earthquake", text: "February 9: San Fernando earthquake (California)—65 dead" },
          { type: "flood", text: "Vietnam floods—100,000 dead" },
          { type: "war", text: "Bangladesh Liberation War—3 million dead" },
        ]},
        { year: 1974, events: [
          { type: "storm", text: "April 3-4: 1974 SUPER OUTBREAK—148 tornadoes; 335 dead" },
          { type: "storm", text: "December 25: Cyclone Tracy—71 dead (Australia)" },
          { type: "famine", text: "Ethiopia drought/famine begins—400,000+ will die" },
        ], quote: { text: "The time is near when large cities will be swept away, and all should be warned of these coming judgments.", source: "Ellen G. White, Evangelism, 29 (1910)" }},
        { year: 1975, events: [
          { type: "flood", text: "August: Typhoon Nina causes Banqiao Dam failure (China)—85,600-240,000 dead" },
          { type: "war", text: "Fall of Saigon—Vietnam War ends; 3 million total dead" },
          { type: "crime", text: "Cambodian genocide begins—2 million will die" },
        ]},
        { year: 1976, events: [
          { type: "earthquake", text: "July 28: TANGSHAN EARTHQUAKE (China)—242,769 official dead; possibly 655,000+" },
          { type: "earthquake", text: "February 4: Guatemala earthquake—23,000 dead" },
          { type: "flood", text: "Big Thompson Canyon flood—143 dead" },
        ]},
        { year: 1978, events: [
          { type: "earthquake", text: "September 16: Tabas earthquake (Iran)—25,000 dead" },
          { type: "crime", text: "November 18: Jonestown mass suicide—918 dead" },
        ]},
        { year: 1979, events: [
          { type: "disaster", text: "March 28: Three Mile Island nuclear accident" },
          { type: "storm", text: "Hurricane David—2,068 dead (Caribbean)" },
        ], quote: { text: "God is withdrawing His Spirit from the wicked cities, which have become as the cities of the antediluvian world and as Sodom and Gomorrah.", source: "Ellen G. White, This Day With God, 152 (1902)" }},
        { year: 1980, events: [
          { type: "volcano", text: "May 18: MOUNT ST. HELENS ERUPTION—57 dead" },
          { type: "earthquake", text: "October 10: El Asnam earthquake (Algeria)—2,633 dead" },
          { type: "fire", text: "MGM Grand fire—85 dead" },
        ]},
        { year: 1981, events: [
          { type: "disaster", text: "July 17: Hyatt Regency walkway collapse—114 dead" },
          { type: "crime", text: "March 30: President Reagan assassination attempt" },
          { type: "disease", text: "AIDS pandemic identified" },
        ]},
        { year: 1984, events: [
          { type: "disaster", text: "December 3: BHOPAL DISASTER—3,787-16,000 dead; worst industrial disaster" },
          { type: "crime", text: "July 18: San Ysidro McDonald's massacre—22 dead" },
          { type: "famine", text: "Ethiopian Famine—1 million dead" },
        ], quote: { text: "Costly mansions, marvels of architectural skill, will be destroyed without a moment's notice when the Lord sees that the owners have passed the boundaries of forgiveness.", source: "Ellen G. White, This Day With God, 152 (1902)" }},
        { year: 1985, events: [
          { type: "earthquake", text: "September 19: MEXICO CITY EARTHQUAKE—10,000+ dead" },
          { type: "volcano", text: "November 13: Nevado del Ruiz eruption—23,000 dead (Colombia)" },
        ]},
        { year: 1986, events: [
          { type: "disaster", text: "April 26: CHERNOBYL NUCLEAR DISASTER—31 immediate dead; thousands eventual" },
          { type: "disaster", text: "January 28: Space Shuttle Challenger disaster—7 dead" },
          { type: "disaster", text: "August 21: Lake Nyos gas disaster—1,700 dead (Cameroon)" },
        ]},
        { year: 1988, events: [
          { type: "earthquake", text: "December 7: SPITAK EARTHQUAKE (Armenia)—25,000-50,000 dead" },
          { type: "crime", text: "December 21: Pan Am Flight 103 bombing—270 dead" },
          { type: "storm", text: "Hurricane Gilbert—318 dead" },
        ]},
        { year: 1989, events: [
          { type: "earthquake", text: "October 17: Loma Prieta earthquake—63 dead (San Francisco Bay)" },
          { type: "crime", text: "June 4: Tiananmen Square massacre—hundreds to thousands dead" },
          { type: "storm", text: "Hurricane Hugo—82 dead" },
        ], quote: { text: "As we near the close of this earth's history, we shall have the scenes of the San Francisco calamity repeated in other places. These things make me feel very solemn because I know that the judgment day is right upon us.", source: "Ellen G. White, Letter 154, 1906" }},
      ]
    },
    {
      id: 6,
      name: "The Final Acceleration",
      years: "1990-2026",
      description: "The past three and a half decades have witnessed an unprecedented acceleration of disasters, violence, and global instability. The 2004 Indian Ocean tsunami killed 230,000 in a single day. COVID-19 has claimed millions.",
      introQuote: {
        text: "The present is a time of overwhelming interest to all living. Rulers and statesmen, men who occupy positions of trust and authority, thinking men and women of all classes, have their attention fixed upon the events taking place about us. They observe the intensity that is taking possession of every earthly element and they recognize that something great and decisive is about to take place—that the world is on the verge of a stupendous crisis.",
        source: "Ellen G. White, Prophets and Kings, 537 (c. 1914)"
      },
      events: [
        { year: 1990, events: [
          { type: "earthquake", text: "June 21: Manjil-Rudbar earthquake (Iran)—50,000 dead" },
          { type: "war", text: "August 2: Iraq invades Kuwait" },
        ]},
        { year: 1991, events: [
          { type: "storm", text: "April 29: Bangladesh cyclone—138,000 dead" },
          { type: "volcano", text: "June 15: Mount Pinatubo eruption—847 dead" },
          { type: "war", text: "Gulf War—25,000-50,000 Iraqi dead" },
        ]},
        { year: 1992, events: [
          { type: "storm", text: "August 24: Hurricane Andrew—65 dead; $27 billion damage" },
          { type: "crime", text: "April 29-May 4: Los Angeles riots—63 dead" },
          { type: "earthquake", text: "December 12: Flores earthquake (Indonesia)—2,500 dead" },
        ]},
        { year: 1993, events: [
          { type: "crime", text: "February 26: World Trade Center bombing—6 dead" },
          { type: "crime", text: "April 19: Waco siege ends—76 dead" },
          { type: "flood", text: "Great Midwest Flood—50 dead; $15 billion damage" },
          { type: "earthquake", text: "September 29: Latur earthquake (India)—9,748 dead" },
        ]},
        { year: 1994, events: [
          { type: "earthquake", text: "January 17: Northridge earthquake—57 dead; $20 billion damage" },
          { type: "crime", text: "April-July: RWANDAN GENOCIDE—800,000-1.1 million dead" },
        ], quote: { text: "The labor unions are quickly stirred to violence if their demands are not complied with. Plainer and plainer is it becoming that the inhabitants of the world are not in harmony with God.", source: "Ellen G. White, The Upward Look, 334 (1903)" }},
        { year: 1995, events: [
          { type: "earthquake", text: "January 17: KOBE EARTHQUAKE (Japan)—6,434 dead; $100 billion damage" },
          { type: "crime", text: "April 19: Oklahoma City bombing—168 dead" },
          { type: "disaster", text: "July: Chicago heat wave—739 dead" },
        ]},
        { year: 1998, events: [
          { type: "storm", text: "October: HURRICANE MITCH—11,000+ dead; deadliest Atlantic hurricane since 1900" },
          { type: "earthquake", text: "May 30: Afghanistan earthquake—4,000 dead" },
          { type: "crime", text: "U.S. embassy bombings—224 dead" },
        ]},
        { year: 1999, events: [
          { type: "earthquake", text: "August 17: İzmit earthquake (Turkey)—17,127 dead" },
          { type: "storm", text: "May 3: Bridge Creek-Moore tornado—36 dead (F5)" },
          { type: "crime", text: "April 20: COLUMBINE SCHOOL SHOOTING—15 dead" },
          { type: "earthquake", text: "September 21: Chi-Chi earthquake (Taiwan)—2,415 dead" },
        ], quote: { text: "Men will continue to erect expensive buildings, costing millions of money... but the Lord has instructed me that despite the unusual firmness and expensive display, these buildings will share the fate of the temple in Jerusalem.", source: "Ellen G. White, The S.D.A. Bible Commentary 5:1098" }},
        { year: 2001, events: [
          { type: "crime", text: "September 11: TERRORIST ATTACKS ON UNITED STATES—2,977 dead" },
          { type: "earthquake", text: "January 26: Gujarat earthquake (India)—20,023 dead" },
          { type: "war", text: "War in Afghanistan begins" },
        ]},
        { year: 2003, events: [
          { type: "war", text: "March 20: Iraq War begins—hundreds of thousands will die" },
          { type: "disaster", text: "August: EUROPEAN HEAT WAVE—70,000+ dead" },
          { type: "earthquake", text: "December 26: Bam earthquake (Iran)—26,271 dead" },
        ]},
        { year: 2004, events: [
          { type: "earthquake", text: "December 26: INDIAN OCEAN TSUNAMI—227,000 dead; M9.1 earthquake; DEADLIEST TSUNAMI IN HISTORY" },
          { type: "storm", text: "September-October: Four major hurricanes strike Florida" },
          { type: "crime", text: "Beslan school massacre—334 dead" },
        ], quote: { text: "The whole world is stirred with the spirit of war. The prophecies of the eleventh of Daniel have almost reached their final fulfillment.", source: "Ellen G. White, The Review and Herald, November 24, 1904" }},
        { year: 2005, events: [
          { type: "storm", text: "August 29: HURRICANE KATRINA—1,833 dead; $125 billion damage" },
          { type: "earthquake", text: "October 8: Kashmir earthquake—86,000 dead" },
          { type: "crime", text: "July 7: London bombings—56 dead" },
        ]},
        { year: 2008, events: [
          { type: "earthquake", text: "May 12: SICHUAN EARTHQUAKE (China)—69,227 dead" },
          { type: "storm", text: "May 2-3: Cyclone Nargis (Myanmar)—138,366 dead" },
          { type: "economic", text: "September: Global financial crisis begins" },
        ]},
        { year: 2009, events: [
          { type: "earthquake", text: "September 30: Sumatra earthquake—1,115 dead" },
          { type: "disease", text: "H1N1 (Swine Flu) pandemic—284,000 dead" },
          { type: "fire", text: "February: Black Saturday bushfires (Australia)—173 dead" },
        ], quote: { text: "How frequently we hear of earthquakes and tornadoes, of destruction by fire and flood, with great loss of life and property! Apparently these calamities are capricious outbreaks of disorganized, unregulated forces of nature, wholly beyond the control of man, but in them all God's purpose may be read.", source: "Ellen G. White, Prophets and Kings, 277 (c. 1914)" }},
        { year: 2010, events: [
          { type: "earthquake", text: "January 12: HAITI EARTHQUAKE—160,000-316,000 dead" },
          { type: "earthquake", text: "February 27: Chile earthquake—525 dead (M8.8)" },
          { type: "disaster", text: "April 20: Deepwater Horizon oil spill—11 dead" },
        ]},
        { year: 2011, events: [
          { type: "earthquake", text: "March 11: TOHOKU EARTHQUAKE AND TSUNAMI (Japan)—18,000+ dead; Fukushima nuclear disaster" },
          { type: "storm", text: "May 22: Joplin tornado—158 dead (EF5)" },
          { type: "storm", text: "April 25-28: Super Outbreak—316 dead" },
        ]},
        { year: 2012, events: [
          { type: "storm", text: "October 29: Hurricane Sandy—233 dead; $70 billion damage" },
          { type: "crime", text: "December 14: Sandy Hook Elementary shooting—28 dead" },
          { type: "war", text: "Syrian Civil War intensifies—500,000+ will die" },
        ]},
        { year: 2013, events: [
          { type: "storm", text: "November 8: Typhoon Haiyan (Philippines)—6,340 dead" },
          { type: "storm", text: "May 20: Moore, Oklahoma tornado—24 dead" },
        ]},
        { year: 2014, events: [
          { type: "disease", text: "EBOLA OUTBREAK (West Africa)—11,325 dead" },
          { type: "earthquake", text: "August 3: Yunnan earthquake (China)—617 dead" },
        ], quote: { text: "Pestilences will sweep away thousands.", source: "Ellen G. White, Manuscript Releases 19:382 (1897)" }},
        { year: 2015, events: [
          { type: "earthquake", text: "April 25: NEPAL EARTHQUAKE—8,857 dead" },
          { type: "crime", text: "November 13: Paris attacks—130 dead" },
        ]},
        { year: 2017, events: [
          { type: "earthquake", text: "September 19: Mexico earthquake—370 dead" },
          { type: "storm", text: "August 25: Hurricane Harvey—107 dead; $125 billion damage" },
          { type: "crime", text: "October 1: Las Vegas shooting—61 dead" },
        ]},
        { year: 2018, events: [
          { type: "earthquake", text: "September 28: Sulawesi earthquake and tsunami—4,340 dead" },
          { type: "fire", text: "November: Camp Fire (California)—85 dead; deadliest U.S. wildfire" },
        ]},
        { year: 2019, events: [
          { type: "crime", text: "March 15: Christchurch mosque shootings—51 dead" },
          { type: "disease", text: "December: COVID-19 PANDEMIC BEGINS—will kill millions" },
          { type: "fire", text: "September-March: Australian bushfires—34 dead; 46 million acres" },
          { type: "storm", text: "Cyclone Idai (Mozambique)—1,303 dead" },
        ], quote: { text: "God permits these calamities to occur that the world may take heed, that sinners may be afraid and tremble before Him.", source: "Ellen G. White, Manuscript Releases 3:311 (1902)" }},
        { year: 2020, events: [
          { type: "disease", text: "COVID-19 PANDEMIC: Global deaths reach 1.8+ million by year end" },
          { type: "disaster", text: "August 4: Beirut explosion—218 dead; 7,000 injured" },
          { type: "storm", text: "Record Atlantic hurricane season—30 named storms" },
        ]},
        { year: 2021, events: [
          { type: "disease", text: "COVID-19 global deaths exceed 5 million" },
          { type: "earthquake", text: "August 14: Haiti earthquake—2,248 dead" },
          { type: "flood", text: "July 14-15: European floods—243 dead" },
          { type: "storm", text: "December 10-11: Quad-State tornado outbreak—90 dead" },
        ]},
        { year: 2022, events: [
          { type: "war", text: "February 24: RUSSIA INVADES UKRAINE—hundreds of thousands will die" },
          { type: "earthquake", text: "June 22: Afghanistan earthquake—1,163 dead" },
          { type: "storm", text: "September: Hurricane Ian—161 dead" },
        ]},
        { year: 2023, events: [
          { type: "earthquake", text: "February 6: TURKEY-SYRIA EARTHQUAKES—59,259 dead; M7.8" },
          { type: "earthquake", text: "September 8: Morocco earthquake—2,960 dead" },
          { type: "flood", text: "September 10: Libya floods—11,300+ dead" },
          { type: "war", text: "October 7: Hamas-Israel conflict begins—thousands dead" },
        ]},
        { year: 2024, events: [
          { type: "earthquake", text: "January 1: Noto Peninsula earthquake (Japan)—470+ dead" },
          { type: "storm", text: "September: Hurricane Helene—230+ dead" },
          { type: "war", text: "Continued conflicts in Ukraine, Middle East—thousands dead" },
        ]},
        { year: 2025, events: [
          { type: "fire", text: "January: LOS ANGELES WILDFIRES (Palisades, Eaton)—24+ dead; deadliest wildfires in California history; 16,000+ structures destroyed" },
          { type: "economic", text: "First half 2025: Global natural disasters cause $162 billion in economic losses" },
          { type: "flood", text: "July 4: Texas Hill Country flash floods—135 dead" },
        ], quote: { text: "Just before I awoke, a very impressive scene was presented before me. I seemed to awake from sleep but was not in my home. From the windows I could behold a terrible conflagration. Great balls of fire were falling upon houses, and from these balls fiery arrows were flying in every direction.", source: "Ellen G. White, Evangelism, 29 (1906)" }},
        { year: 2026, events: [
          { type: "disaster", text: "Natural disasters continue to increase in frequency and intensity" },
          { type: "war", text: "Global conflicts persist—Middle East, Ukraine, and elsewhere" },
          { type: "economic", text: "Economic instability worldwide" },
        ]},
      ]
    }
  ]
};

// Event type configurations
const eventTypes: Record<string, { label: string; color: string; icon: string }> = {
  earthquake: { label: "Earthquakes", color: "#B45309", icon: "⚡" },
  storm: { label: "Storms & Hurricanes", color: "#0369A1", icon: "🌀" },
  flood: { label: "Floods", color: "#1D4ED8", icon: "🌊" },
  fire: { label: "Fires", color: "#DC2626", icon: "🔥" },
  volcano: { label: "Volcanic", color: "#7C2D12", icon: "🌋" },
  disease: { label: "Disease & Pandemic", color: "#059669", icon: "☣" },
  famine: { label: "Famine", color: "#854D0E", icon: "🌾" },
  war: { label: "War & Conflict", color: "#4C1D95", icon: "⚔" },
  crime: { label: "Crime & Violence", color: "#BE185D", icon: "⚠" },
  disaster: { label: "Other Disasters", color: "#374151", icon: "💥" },
  economic: { label: "Economic Crisis", color: "#475569", icon: "📉" },
  prophecy: { label: "Prophetic Events", color: "#C9A227", icon: "✦" },
};

interface TimelineEvent {
  type: string;
  text: string;
}

interface YearData {
  year: number;
  events: TimelineEvent[];
  quote?: {
    text: string;
    source: string;
  };
}

interface Era {
  id: number;
  name: string;
  years: string;
  description: string;
  introQuote: {
    text: string;
    source: string;
  };
  events: YearData[];
}

export default function ChronologicalEvidence() {
  const [activeEra, setActiveEra] = useState(1);
  const [activeFilters, setActiveFilters] = useState(new Set(Object.keys(eventTypes)));
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [showIntro, setShowIntro] = useState(true);
  const timelineRef = useRef<HTMLElement>(null);

  const toggleFilter = (type: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(type)) {
      newFilters.delete(type);
    } else {
      newFilters.add(type);
    }
    setActiveFilters(newFilters);
  };

  const selectAllFilters = () => setActiveFilters(new Set(Object.keys(eventTypes)));
  const clearAllFilters = () => setActiveFilters(new Set());

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const currentEra = timelineData.eras.find(e => e.id === activeEra) as Era | undefined;

  const filteredEvents = currentEra?.events.map(yearData => ({
    ...yearData,
    events: yearData.events.filter(e => activeFilters.has(e.type))
  })).filter(yearData => yearData.events.length > 0);

  const totalEvents = filteredEvents?.reduce((sum, y) => sum + y.events.length, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100" style={{ fontFamily: "Georgia, serif" }}>
      {/* Custom styles */}
      <style>{`
        .timeline-line {
          background: linear-gradient(180deg, #C9A227 0%, #8B6914 50%, #C9A227 100%);
        }

        .year-marker {
          background: radial-gradient(circle, #C9A227 0%, #8B6914 100%);
          box-shadow: 0 0 20px rgba(201, 162, 39, 0.4);
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-dark/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gold">
                Chronological Evidence
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Natural Disasters, Crime & World Events - 1844-2026
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowIntro(!showIntro)}
                className="px-4 py-2 text-sm font-medium text-gold border border-gold/40 rounded-lg hover:bg-gold/10 transition-colors"
              >
                {showIntro ? 'Hide' : 'Show'} Introduction
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction Panel */}
        {showIntro && (
          <section className="mb-10 animate-fade-in">
            <div className="bg-gold/5 dark:bg-gold/10 border-l-4 border-gold rounded-r-xl p-6 md:p-8">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
                This document provides a comprehensive chronological record of natural disasters, crimes, wars, and significant world events from 1844 to 2026. The year 1844 marks the beginning of the investigative judgment in the heavenly sanctuary and the start of the last phase of earth&apos;s history.
              </p>
              <blockquote className="border-l-2 border-gold/60 pl-5 my-6">
                <p className="italic text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  &quot;The calamities by land and sea, the unsettled state of society, the alarms of war, are portentous. They forecast approaching events of the greatest magnitude. The agencies of evil are combining their forces and consolidating. They are strengthening for the last great crisis. Great changes are soon to take place in our world, and the final movements will be rapid ones.&quot;
                </p>
                <cite className="block mt-3 text-sm text-gold not-italic">
                  - Ellen G. White, Testimonies for the Church 9:11 (1909)
                </cite>
              </blockquote>
            </div>
          </section>
        )}

        {/* Era Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {timelineData.eras.map((era) => (
              <button
                key={era.id}
                onClick={() => {
                  setActiveEra(era.id);
                  setExpandedYears(new Set());
                }}
                className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all cursor-pointer ${
                  activeEra === era.id
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-dark-100 hover:shadow-md'
                }`}
              >
                {era.years}
              </button>
            ))}
          </div>
        </nav>

        {/* Current Era Header */}
        {currentEra && (
          <section className="bg-white dark:bg-dark-200 rounded-2xl p-6 md:p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  Era {currentEra.id} of 6
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-1 text-gray-900 dark:text-white">
                  {currentEra.name}
                </h2>
                <p className="text-xl text-gold mt-1">{currentEra.years}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gold">{totalEvents}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">events shown</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {currentEra.description}
            </p>
            <blockquote className="bg-gold/5 dark:bg-gold/10 border-l-4 border-gold rounded-r-lg p-4 md:p-5">
              <p className="italic text-gray-600 dark:text-gray-300 leading-relaxed">
                &quot;{currentEra.introQuote.text}&quot;
              </p>
              <cite className="block mt-2 text-sm text-gold not-italic">
                - {currentEra.introQuote.source}
              </cite>
            </blockquote>
          </section>
        )}

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">Filter by type:</span>
            <button
              onClick={selectAllFilters}
              className="text-xs font-sans text-gold hover:underline"
            >
              Select All
            </button>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <button
              onClick={clearAllFilters}
              className="text-xs font-sans text-gold hover:underline"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(eventTypes).map(([key, { label, color, icon }]) => (
              <button
                key={key}
                onClick={() => toggleFilter(key)}
                className={`filter-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium border transition-all ${
                  activeFilters.has(key)
                    ? 'border-transparent text-white'
                    : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
                style={{
                  backgroundColor: activeFilters.has(key) ? color : 'transparent',
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold opacity-60" />

          {/* Events */}
          <div className="space-y-6">
            {filteredEvents?.map((yearData, idx) => {
              const isExpanded = expandedYears.has(yearData.year);
              const hasQuote = yearData.quote;

              return (
                <div
                  key={yearData.year}
                  className="relative pl-12 md:pl-20 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Year marker */}
                  <button
                    onClick={() => toggleYear(yearData.year)}
                    className="absolute left-0 md:left-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-gray-900 font-sans font-bold text-xs hover:scale-110 transition-transform"
                  >
                    {isExpanded ? '−' : '+'}
                  </button>

                  {/* Year content */}
                  <div className="bg-white dark:bg-dark-200 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                      onClick={() => toggleYear(yearData.year)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl md:text-3xl font-bold text-gold">
                          {yearData.year}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                          {yearData.events.length} event{yearData.events.length !== 1 ? 's' : ''}
                          {hasQuote && ' - includes prophecy quote'}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {Array.from(new Set(yearData.events.map(e => e.type))).map(type => (
                          <span
                            key={type}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: eventTypes[type]?.color }}
                            title={eventTypes[type]?.label}
                          />
                        ))}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-3 animate-fade-in">
                        {yearData.events.map((event, eIdx) => (
                          <div
                            key={eIdx}
                            className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-dark/50"
                          >
                            <span
                              className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-sm"
                              style={{ backgroundColor: eventTypes[event.type]?.color + '30' }}
                            >
                              {eventTypes[event.type]?.icon}
                            </span>
                            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                              {event.text}
                            </p>
                          </div>
                        ))}

                        {hasQuote && (
                          <blockquote className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-4 mt-4">
                            <p className="italic text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              &quot;{yearData.quote?.text}&quot;
                            </p>
                            <cite className="block mt-2 text-xs text-gold font-sans not-italic">
                              - {yearData.quote?.source}
                            </cite>
                          </blockquote>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEvents?.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 font-sans">
                No events match your current filters. Try selecting more event types.
              </p>
            </div>
          )}
        </section>

        {/* Conclusion */}
        <section className="mt-16 mb-8">
          <div className="bg-white dark:bg-dark-200 rounded-2xl p-6 md:p-8 border border-gold/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-6">
              The Evidence Speaks
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                This chronological record, spanning 182 years from 1844 to 2026, demonstrates an unmistakable pattern of increasing disaster, violence, and moral decline. What was once unusual has become commonplace.
              </p>
              <p>
                The Spirit of Prophecy writings predicted precisely what we now see fulfilling before our eyes. Ellen White wrote these warnings more than a century ago, yet they describe today&apos;s headlines with remarkable precision. This is not coincidence. It is the fingerprint of divine inspiration.
              </p>
            </div>
            <blockquote className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 mt-6">
              <p className="italic text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                &quot;Great changes are soon to take place in our world, and the final movements will be rapid ones.&quot;
              </p>
              <cite className="block mt-3 text-sm text-gold font-sans not-italic">
                - Ellen G. White, Testimonies for the Church 9:11 (1909)
              </cite>
            </blockquote>
            <p className="text-center text-2xl text-gold mt-8 font-bold italic">
              Even so, come, Lord Jesus!
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-sans mt-2">
              Revelation 22:20
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
            Supplementary Document to the Prophetic Position Paper - January 2026
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-sans mt-2">
            Peculiar Pioneers Ministry
          </p>
        </div>
      </footer>
    </div>
  );
}
