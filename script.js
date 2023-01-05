//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
  fruits: [
    'Abiu',
    'Acerola',
    'Akebi',
    'Ackee',
    'African Cherry Orange',
    'American Mayapple',
    'Apple',
   'Apricot',
    'Araz',
    'Avocado',
    'Banana',
    'Bilberry',
    'Blackberry',
    'Blackcurrant',
    'Black sapote',
    'Blueberry',
    'Boysenberry',
    'Breadfruit',
    'Cactus pear',
    'Canistel',
    'Cashew',
    'Cempedak',
    'Cherimoya',
    'Cherry',
    'Chico fruit',
    'Cloudberry',
    'Coco De Mer',
    'Coconut',
    'Crab apple',
    'Cranberry',
    'Currant',
    'Damson',
    'Date',
    'Dragonfruit' ,
    'Durian',
    'Egg Fruit',
    'Elderberry',
    'Feijoa',
    'Fig',
    'Finger Lime' ,
    'Goji berry',
    'Gooseberry',
    'Grape',
    'Raisin',
    'Grapefruit',
    'Grewia asiatica' ,
    'Guava',
    'Hala Fruit',
    'Honeyberry',
    'Huckleberry',
    'Jabuticaba' ,
    'Jackfruit',
    'Jambul',
    'Japanese plum',
    'Jostaberry',
    'Jujube',
    'Juniper berry',
    'Kaffir Lime',
    'Kiwano' ,
    'Kiwifruit',
    'Kumquat',
    'Lemon',
    'Lime',
    'Loganberry',
    'Longan',
    'Loquat',
    'Lulo',
    'Lychee',
    'Magellan Barberry',
    'Mamey Apple',
    'Mamey Sapote',
    'Mango',
    'Mangosteen',
    'Marionberry',
    'Melon',
    'Cantaloupe',
    'Galia melon',
    'Honeydew',
    'Mouse melon',
    'Musk melon',
    'Watermelon',
    'Miracle fruit',
    'Momordica fruit',
    'Monstera deliciosa',
    'Mulberry',
    'Nance',
    'Nectarine',
    'Orange',
    'Blood orange',
    'Clementine',
    'Mandarine',
    'Tangerine',
    'Papaya',
    'Passionfruit',
    'Pawpaw',
    'Peach',
    'Pear',
    'Persimmon',
    'Plantain',
    'Plum',
    'Prune' ,
    'Pineapple',
    'Pineberry',
    'Plumcot' ,
    'Pomegranate',
    'Pomelo',
    'Purple mangosteen',
    'Quince',
    'Raspberry',
    'Salmonberry',
    'Rambutan' ,
    'Redcurrant',
    'Rose apple',
    'Salal berry',
    'Salak',
    'Sapodilla',
    'Sapote',
    'Satsuma',
    'Soursop',
    'Star apple',
    'Star fruit',
    'Strawberry',
    'Surinam cherry',
    'Tamarillo',
    'Tamarind',
    'Tangelo',
    'Tayberry',
    'Ugli fruit',
    'White currant',
    'White sapote',
    'Ximenia',
    'Yuzu',
  ],
  animals: [
    'Aardvark'
    'Aardwolf'
    'Abyssinian'
    'Abyssinian Guinea Pig'
    'Acadian Flycatcher'
    'Achrioptera Manga'
    'Ackie Monitor'
    'Addax'
    'Adelie Penguin'
    'Aesculapian snake'
    'Affenpinscher'
    'Afghan Hound'
    'African Bullfrog'
    'African Bush Elephant'
    'African Civet'
    'African Clawed Frog'
    'African Fish Eagle'
    'African Forest Elephant'
    'African Golden Cat'
    'African Grey Parrot'
    'African Jacana'
    'African Palm Civet'
    'African Penguin'
    'African Tree Toad'
    'African Wild Dog'
    'Africanized bee'
    'Agama Lizard'
    'Aidi'
    'Ainu'
    'Airedale Terrier'
    'Airedoodle'
    'Akbash'
    'Akita'
    'Akita Shepherd'
    'Alabai' 
    'Alaskan Husky'
    'Alaskan Klee Kai'
    'Alaskan Malamute'
    'Alaskan Pollock'
    'Alaskan Shepherd'
    'Albacore Tuna'
    'Albatross'
    'Albertonectes'
    'Albino' 
    'Aldabra Giant Tortoise'
    'Alligator Gar'
    'Allosaurus'
    'Allosaurus'
    'Alpaca'
    'Alpine Dachsbracke'
    'Alpine Goat'
    'Alusky'
    'Amano Shrimp'
    'Amargasaurus'
    'Amazon Parrot'
    'Pink Dolphin'
    'Amazon Tree Boa'
    'Amazonian Royal Flycatcher'
    'Ambrosia Beetle'
    'American Alligator'
   ' American Alsatian'
    'American Bulldog'
    'American Bully'
    'American Cocker Spaniel'
    'American Cockroach'
    'American Coonhound'
    'American Dog Tick'
    'American Eel'
    'American Eskimo Dog'
    'American Foxhound'
    'American Hairless Terrier'
    'American Leopard Hound'
    'American Paddlefish'
    'American Pit Bull Terrier'
    'American Pugabull'
    'American Pygmy Goat'
    'American Robin'
    'American Staffordshire Terrier'
    'American Toad'
    'American Water Spaniel'
    'American Wirehair'
    'Scrub Python'
    'Amphicoelias Fragillimus'
    'Amur Leopard'
    'Anaconda'
    'Anatolian Shepherd Dog'
    'Anchovies'
    'Andrewsarchus'
    'Angelfish'
   ' Angelshark'
    'Angled Sunbeam Caterpillar'
    'Anglerfish'
    'Angora Ferret'
    'Angora Goat'
    'Anhinga'
    'Hummingbird'
    'Anole Lizard'
    'Anomalocaris'
    'Ant'
    'Antarctic scale worm'
    'Anteater'
    'Antelope'
    'Anteosaurus'
    'Ape'
    'Apennine Wolf'
    'Appenzeller Dog'
    'Apple Head Chihuahua'
    'Apple Moth'
    'Arabian Cobra'
    'Arabian Wolf'
    'Arafura File Snake'
    'Arambourgiania'
    'Arapaima'
    'Archaeoindris'
    'Archaeopteryx'
    'Archaeotherium'
    Archelon Turtle
    Archerfish
    Arctic Char
    Arctic Fox
    Arctic Hare
    Arctic Wolf
    Arctodus
    Arctotherium
    Argentavis Magnificens
    Argentinosaurus
    Arizona Bark Scorpion
    Arizona Black Rattlesnake
    Arizona Blonde Tarantula
    Arizona Coral Snake
    Armadillo
    Armadillo Lizard
    Armenian Gampr
    Armored Catfish
    Armyworm
    Arsinoitherium
    Arthropleura
    Aruba Rattlesnake
    Asian Arowana
    Asian Carp
    Asian Cockroach
    Asian Elephant
    Asian Giant Hornet
    Asian Lady Beetle
    Asian Longhorn Beetle
    Asian Palm Civet
    Asian Vine Snake
    Asian Water Monitor
    Asiatic Black Bear
    Asp
    Assassin Bug
    Assassin Snail
    Atlantic Salmon
    Atlantic Sturgeon
    Atlas Beetle
    Atlas Moth
    Aurochs
    Aussiedoodle
    Aussiedor
    Aussiepom
    Australian Bulldog
    Australian Cattle Dog
    Australian Cockroach
    Australian Flathead Perch
    Australian Gecko
    Australian Kelpie Dog
    Australian Labradoodle
    Australian Mist
    Australian Retriever
    Australian Shepherd
    Australian Terrier
    Australopithecus
    Avocet
    Axanthic Ball Python
    Axolotl
    Ayam Cemani
    Aye-aye
    Azawakh
    Babirusa
    Baboon
    Bactrian Camel
    Badger
    Baiji
    Baird’s Rat Snake
    Bald Eagle
    Baleen Whale
    Balinese
    Balkan Lynx
    Ball Python
    Bamboo Worms
    Banana Ball Python
    Banana Cinnamon Ball Python
    Banana Eel
    Banana Spider
    Banded Krait
    Banded Palm Civet
    Banded Water Snake
    Bandicoot
    Banjo Catfish
    Barb
    Barbet
    Barinasuchus
    Bark Beetle
    Bark Scorpion
    Barn Owl
    Barn Swallow
    Barnacle
    Barosaurus
    Barracuda
    Barramundi Fish
    Barred Owl
    Barreleye Fish (Barrel Eye)
    Barylambda
    Basenji Dog
    Basilisk Lizard
    Basilosaurus
    Basking Shark
    Bass
    Bassador
    Basset Fauve de Bretagne
    Basset Hound
    Bassetoodle
    Bat
    Bat-Eared Fox
    Batfish
    Bavarian Mountain Hound
    Baya
    Bea-Tzu
    Beabull
    Beagador
    Beagle
    Beagle Shepherd
    Beaglier
    Beago
    Bear
    Bearded Collie
    Bearded Dragon
    Bearded Fireworm
    Bearded Vulture
    Beaski
    Beauceron
    Beauty rat snake
    Beaver
    Bed Bugs
    Bedlington Terrier
    Bee
    Bee-Eater
    Beefalo
    Beetle
    Belgian Canary
    Belgian Laekenois
    Belgian Malinois
    Belgian Sheepdog
    Belgian Shepherd
    Belgian Tervuren
    Belted Kingfisher
    Beluga Sturgeon
    Beluga Sturgeon
    Bengal Tiger
    Bergamasco
    Berger Blanc Suisse
    Berger Picard
    Bernedoodle
    Bernese Mountain Dog
    Bernese Shepherd
    Betta Fish (Siamese Fighting Fish)
    Bhutan Takin
    Bichir
    Bichon Frise
    Bichpoo
    Biewer Terrier
    Bigfin Reef Squid 
    Bighorn Sheep
    Bilby
    Binturong
    Bird
    Bird Of Paradise
    Bird Snake
    Birman
    Biscuit Beetle
    Bismarck Ringed Python
    Bison
    Black And Tan Coonhound
    Black and White Warbler
    Black Dragon Lizard
    Black Mamba
    Black Marlin
    Black Mouth Cur
    Black Pastel Ball Python
    Black Rat Snake
    Black Rhinoceros
    Black Russian Terrier
    Black Tarantula
    Black Throat Monitor
    Black Wasp
    Black Widow Spider
    Black Witch Moth
    Black-Bellied Whistling Duck
    Black-Capped Chickadee
    Black-Footed Ferret
    Black-headed python
    Blacknose Shark
    Blackpoll Warbler
    Blacktip Reef Shark
    Bladefin Basslet
    Blanket Octopus
    Blind Snake
    Blister Beetle
    Blister Beetle
    Blobfish
    Blood Python
    Bloodhound
    Blue Belly Lizard
    Blue Catfish
    Blue Death Feigning Beetle
    Blue Eyed Pleco
    Blue Gray Gnatcatcher
    Blue grosbeak
    Blue Iguana
    Blue Jay
    Blue Lacy Dog
    Blue Picardy Spaniel
    Blue Racer
    Blue Shark
    Blue Tanager (Blue-Grey Tanager)
    Blue Tit
    Blue Whale
    Blue-Ringed Octopus
    Bluefin Tuna
    Bluegill
    Bluetick Coonhound
    Boas
    Bobcat
    Bobolink
    Boelen’s python
    Boerboel
    Boggle
    Boglen Terrier
    Boiga
    Bolivian Anaconda
    Bolognese Dog
    Bombay
    Bongo
    Bonito Fish
    Bonnethead Shark
    Bonobo
    Booby
    Boomslang
    Borador
    Border Collie
    Border Terrier
    Bordoodle
    Borkie
    Bornean Orang-utan
    Borneo Elephant
    Boston Terrier
    Bottlenose Dolphin
    Bouvier Des Flandres
    Bowfin
    Bowhead Whale
    Box Tree Moth
    Box Turtle
    Boxachi
    Boxador
    Boxer Dog
    Boxerdoodle
    Boxfish
    Boxsky
    Boxweiler
    Boykin Spaniel
    Bracco Italiano
    Brachiosaurus
    Brahminy Blindsnake
    Braque Francais
    Brazilian Black Tarantula
    Brazilian Terrier
    Brazilian Treehopper
    Bredl’s Python
    Briard
    British Timber
    Brittany
    Brontosaurus
    Bronze Whaler Shark
    Bronze-winged Jacana
    Brook Trout
    Brookesia Micra
    Brown Bear
    Brown Dog Tick
    Brown Headed Cowbird
    Brown Hyena
    Brown Snake
    Brown Tree Snake
    Brown Water Snake
    Brown-banded Cockroach
    Brug
    Brussels Griffon
    Budgerigar
    Buffalo
    Buffalo Fish
    Bull and Terrier
    Bull Shark
    Bull Terrier
    Bull Trout
    Bulldog
    Bulldog Mix
    Bullfrog
    Bullmastiff
    Bullsnake
    Bumblebee
    Burmese
    Burmese Python
    Burrowing Frog
    Burrowing Owl
    Bush Baby
    Bush Viper
    Bushmaster Snake
    Butterfly
    Butterfly Fish
    Cabbage Moth
    Cactus Moth
    Cactus Mouse
    Cactus Wren
    Caecilian
    Caiman
    Caiman Lizard
    Cairn Terrier
    California Condor
    California Kingsnake
    California Tarantula
    Camel
    Camel Cricket
    Camel Spider
    Canaan Dog
    Canada Lynx
    Canada Warbler
    Canadian Eskimo Dog
    Canadian Horse
    Cane Corso
    Cantil
    Cape Lion
    Capybara
    Caracal
    Cardinal
    Caribbean Reef Shark
    Caribou
    Carolina Dog
    Carolina Parakeet
    Carp
    Carpenter Ant
    Carpet Python
    Carpet Viper
    Cascabel
    Cashmere Goat
    Cassowary
    Cat
    Cat Snake
    Cat-Eyed Snake
    Catahoula Bulldog
    Catahoula Leopard
    Catalan Sheepdog
    Caterpillar
    Catfish
    Caucasian Mountain Dog (Shepherd)
    Caucasian Shepherd
    Cava Tzu
    Cavador
    Cavalier King Charles Spaniel
    Cavapoo
    Cave Bear
    Cave Lion
    Cecropia Moth
    Cedar Waxwing
    Centipede
    Central Ranges Taipan
    Cephalaspis
    Ceratosaurus
    Cervalces latifrons (Broad-Fronted Moose)
    Cesky Fousek
    Cesky Terrier
    Chameleon
    Chamois
    Chartreux
    Cheagle
    Checkered Garter Snake
    Cheetah
    Chesapeake Bay Retriever
    Chestnut-Sided Warbler
    Chi Chi
    Chickadee
    Chicken
    Chicken Snake
    Chigger
    Chihuahua
    Children’s python
    Chilean Rose Tarantula
    Chimaera
    Chimpanzee
    Chinchilla
    Chinese Alligator
    Chinese Cobra
    Chinese Crested Dog
    Chinese Geese
    Chinese Paddlefish
    Chinese Shar-Pei
    Chinese Water Deer
    Chinook
    Chinook Salmon
    Chinstrap Penguin
    Chipit
    Chipmunk
    Chipoo
    Chipping Sparrow
    Chiton
    Chiweenie
    Chorkie
    Chow Chow
    Chow Pom
    Chow Shepherd
    Christmas Beetle
    Christmas Island Red Crab
    Chusky
    Cicada
    Cichlid
    Cinereous Vulture
    Cinnamon Ball Python
    Cinnamon Bear
    Cinnamon Ferret
    Clark’s Grebe
    Click Beetle
    Clock Spider
    Clothes Moth
    Clouded Leopard
    Clownfish
    Clumber Spaniel
    Coachwhip Snake
    Coastal Carpet Python
    Coastal Taipan
    Coati
    Cobia Fish
    Cobras
    Cockalier
    Cockapoo
    Cockatiel
    Cockatoo
    Cocker Spaniel
    Cockle
    Cockroach
    Codfish
    Codling Moth
    Coelacanth
    Collared Peccary
    Collett’s Snake
    Collie
    Colossal Squid
    Comb Jellyfish
    Comb-crested Jacana
    Comet Moth
    Comfort Retriever
    Common Buzzard
    Common Carp
    Common European Adder
    Common Frog
    Common Furniture Beetle
    Common Grackle
    Common Green Magpie
    Common House Spider
    Common Loon
    Common Raven
    Common Toad
    Common Yellowthroat
    Compsognathus
    Cone Snail
    Conger Eel
    Congo Snake
    Conure
    Cookiecutter Shark
    Cooper’s Hawk
    Copperhead
    Coral
    Coral Snake
    Corella
    Corgidor
    Corgipoo
    Corkie
    Corman Shepherd
    Corn Rex Cat (Cornish Rex)
    Corn Snake
    Cory Catfish
    Coryphodon
    Costa’s Hummingbird
    Coton de Tulear
    Cotton-top Tamarin
    Cottonmouth
    Cougar
    Cow
    Coyote
    Crab
    Crab Spider
    Crab-Eating Macaque
    Crabeater Seal
    Crane
    Crappie Fish
    Crayfish
    Crested Gecko
    Crested Penguin
    Cricket
    Croatian Sheepdog
    Crocodile
    Crocodile Monitor
    Cross Fox
    Cross River Gorilla
    Crow
    Crucian Carp
    Cryolophosaurus
    Cuban Boa
    Cuban Cockroach
    Cuckoo
    Curly Coated Retriever
    Curly Hair Tarantula
    Cuscus
    Cuttlefish
    Czechoslovakian Wolfdog
    Dachsador
    Dachshund
    Daeodon
    Dalmadoodle
    Dalmador
    Dalmatian
    Dandie Dinmont Terrier
    Daniff
    Danios
    Danish Swedish Farmdog
    Dapple Dachshund
    Dark-Eyed Junco
    Dark-Eyed Junco
    Darkling Beetle
    Darwin’s fox
    Darwin’s Frog
    Daug
    De Brazza’s Monkey
    De Kay’s Brown Snake
    Death Adder
    Death’s Head Cockroach
    Deathwatch Beetle
    Decorator Crab
    Deer
    Deer Head Chihuahua
    Deer Tick
    Deinocheirus
    Deinosuchus
    Desert Ghost Ball Python
    Desert Kingsnake
    Desert Locust
    Desert Rain Frog
    Desert Tortoise
    Desert Wolf
    Desmostylus
    Deutsche Bracke
    Devil’s Coach Horse Beetle
    Devon Rex
    Dhole
    Diamond python
    Diamondback Moth
    Dickinsonia
    Dik-Dik
    Dilophosaurus
    Dimetrodon
    Dingo
    Dinocrocuta
    Dinofelis
    Dinopithecus
    Dinosaur Shrimp
    Dinosaurs
    Diplodocus
    Diprotodon
    Dire Wolf
    Discus
    Doberman Pinscher
    Dobsonfly
    Dodo
    Doedicurus
    Dog
    Dog Tick
    Dogo Argentino
    Dogue De Bordeaux
    Dolphin
    Donkey
    Dorgi
    Dorkie
    Dormouse
    Double Doodle
    Douc
    Downy Woodpecker
    Doxiepoo
    Doxle
    Draco Volans Lizard
    Dragon Eel
    Dragonfish
    Dragonfly
    Dreadnoughtus
    Drever
    Drum Fish
    Dubia Cockroach
    Duck
    Dugong
    Dumeril’s Boa
    Dung Beetle
    Dungeness Crab
    Dunker
    Dunkleosteus
    Dunnock
    Dusky Dolphin
    Dusky Shark
    Dutch Rabbit
    Dutch Shepherd
    Dwarf Boa
    Dwarf Crocodile
    Dwarf Hamster
    Eagle
    Eagle Ray
    Eared Grebe
    Earless Monitor Lizard
    Earthworm
    Earwig
    East Siberian Laika
    Eastern Barred Bandicoot
    Eastern Bluebird
    Eastern Box Turtle
    Eastern Brown Snake
    Eastern Chipmunk
    Eastern Coral Snake
    Eastern Diamondback Rattlesnake
    Eastern Dobsonfly
    Eastern Fence Lizard
    Eastern Glass Lizard
    Eastern Gorilla
    Eastern Gray Squirrel
    Eastern Green Mamba
    Eastern Hognose Snake
    Eastern Indigo Snake
    Eastern Kingbird
    Eastern Lowland Gorilla
    Eastern Meadowlark
    Eastern Phoebe
    Eastern Racer
    Eastern Rat snake
    Eastern Tiger Snake
    Eastern Turkey (Wild Turkey)
    Eastern Woodrat
    Echidna
    Eclectus Parrot
    Edible Frog
    Eel
    Eel catfish
    Egret
    Egyptian Cobra (Egyptian Asp)
    Egyptian Goose
    Egyptian Mau
    Egyptian Tortoise
    Egyptian Vulture
    Eider
    Eland
    Elasmosaurus
    Elasmotherium
    Electric Catfish
    Electric Eel
    Elegant Tern
    Elephant
    Elephant Beetle
    Elephant Bird
    Elephant Fish
    Elephant Seal
    Elephant Shrew
    Elf Owl
    Elk
    Ember Tetra
    Embolotherium
    Emerald Toucanet
    Emerald Tree Boa
    Emerald Tree Monitor
    Emperor Angelfish
    Emperor Goose
    Emperor Penguin
    Emperor Tamarin
    Emu
    Enchi Ball Python
    English Bulldog
    English Cocker Spaniel
    English Cream Golden Retriever
    English Crested Guinea Pig
    English Foxhound
    English Longhorn Cattle
    English Pointer
    English Setter
    English Shepherd
    English Springer Spaniel
    English Toy Terrier
    Entlebucher Mountain Dog
    Epagneul Pont Audemer
    Epicyon haydeni
    Epidexipteryx
    Equatorial Spitting Cobra
    Equus giganteus
    Ermine
    Eryops
    Escolar
    Eskimo Dog
    Eskipoo
    Estrela Mountain Dog
    Euoplocephalus
    Eurasian Beaver
    Eurasian Bullfinch
    Eurasian Collared Dove
    Eurasian Jay
    Eurasian Lynx
    Eurasian Nuthatch
    Eurasian Sparrowhawk
    Eurasian Wolf
    Eurasier
    European Bee-Eater
    European Corn Borer
    European Goldfinch
    European Polecat
    European Robin
    European Starling
    European Wildcat
    Eurypterus
    Evening Bat
    Evening Grosbeak
    Executioner Wasp 
    Eyelash Viper
    Fairy-Wren
    Falcon
    Fallow deer
    False Cobra
    False coral snake
    False Killer Whale
    False Water Cobra
    False Widow Spider
    Fangtooth
    Feist
    Fennec Fox
    Fer-de-lance Snake
    Ferret
    Ferruginous Hawk
    Fiddler Crab
    Field Spaniel
    Fierce Snake
    Figeater Beetle
    Fila Brasileiro
    Fin Whale
    Finnish Lapphund
    Finnish Spitz
    Fire Ball Python
    Fire Eel
    Fire salamander
    Fire-Bellied Toad
    Firefly
    Firefly Ball Python
    Fish
    Fisher Cat
    Fishing Cat
    Flamingo
    Flat-Coated Retriever
    Flathead Catfish
    Flea
    Flea Beetle
    Fleckvieh Cattle
    Florida Gar
    Florida Panther
    Florida Woods Cockroach
    Flounder
    Flounder Fish
    Flour Beetle
    Flowerhorn Fish
    Fluke Fish (summer flounder)
    Fly
    Flycatcher
    Flying Fish
    Flying Lemur
    Flying Snake
    Flying Squirrel
    Football Fish
    Forest Cobra
    Formosan Mountain Dog
    Fossa
    Fox
    Fox Snakes
    Fox Squirrel
    Fox Terrier
    Freeway Ball Python
    French Bulldog
    French Lop
    Frenchton
    Frengle
    Freshwater Crocodile
    Freshwater Eel
    Freshwater Jellyfish
    Freshwater Sunfish
    Frigatebird
    Frilled Lizard
    Frilled Shark
    Fritillary Butterfly
    Frog
    Frogfish
    Frug
    Fruit Bat
    Fruit Fly
    Fulvous Whistling Duck
    Fur Seal
    Gaboon Viper
    Galapagos Penguin
    Galapagos Shark
    Galapagos Tortoise
    Gar
    Garden Eel
    Garden Spider
    Gargoyle Gecko
    Garter Snake
    Gastornis
    Gazelle
    Gecko
    Genet
    Gentoo Penguin
    Geoffroys Tamarin
    Gerberian Shepsky
    Gerbil
    German Cockroach
    German Longhaired Pointer
    German Pinscher
    German Shepherd Guide
    German Sheppit
    German Sheprador
    German Shorthaired Pointer
    German Spitz
    German Wirehaired Pointer
    Gharial
    Ghost Catfish
    Ghost Crab
    Giant African Land Snail
    Giant Armadillo
    Giant Beaver
    Giant Clam
    Giant Desert Centipede
    Giant House Spider
    Giant Isopod
    Giant Leopard Moth
    Giant Panda Bear
    Giant Salamander
    Giant Schnauzer
    Giant Schnoodle
    Giant Weta
    Gibbon
    Gigantopithecus
    Gila Monster
    Giraffe
    Glass Frog
    Glass Lizard
    Glechon
    Glen Of Imaal Terrier
    Glow Worm
    Gnat
    Goat
    Goberian
    Goblin Shark
    Goby Fish
    Goldador
    Goldcrest
    Golden Dox
    Golden Eagle
    Golden Irish
    Golden Lancehead
    Golden Lion Tamarin
    Golden Masked Owl
    Golden Newfie
    Golden Oriole
    Golden Pyrenees
    Golden Retriever
    Golden Saint
    Golden Shepherd
    Golden Tortoise Beetle
    Golden-Crowned Flying Fox
    Golden-Crowned Kinglet
    Goldendoodle
    Goldfish
    Goliath Beetle
    Goliath Frog
    Goliath Tigerfish
    Gollie
    Gomphotherium
    Goonch Catfish
    Goose
    Gooty Sapphire Tarantula
    Gopher
    Gopher Snake
    Gopher Tortoise
    Gordon Setter
    Gorgosaurus
    Gorilla
    Goshawk
    Gouldian Finch
    Grapevine Beetle
    Grass Carp
    Grass Snake
    Grass Spider
    Grasshopper
    Grasshopper Mouse
    Gray Catbird
    Gray Fox
    Gray Tree Frog
    Great Blue Heron
    Great Crested Flycatcher
    Great Dane
    Great Danoodle
    Great Egret
    Great Hammerhead Shark
    Great Kiskadee
    Great Plains Rat Snake
    Great Potoo Bird
    Great Pyrenees
    Great White Shark
    Greater Swiss Mountain Dog
    Grebe
    Green Anaconda
    Green Anole
    Green Aphids
    Green Bee-Eater
    Green Bottle Blue Tarantula
    Green Frog
    Green Heron
    Green Mamba
    Green Rat Snake
    Green Snake
    Green Sunfish
    Green Tree Frog
    Green Tree Python
    Greenland Dog
    Greenland Shark
    Grey Heron
    Grey Mouse Lemur
    Grey Reef Shark
    Grey Seal
    Greyhound
    Griffon Vulture
    Griffonshire
    Grizzly Bear
    Groenendael
    Ground Snake
    Groundhog (Woodchuck)
    Grouper
    Grouse
    Guinea Fowl
    Guinea Pig
    Gulper Catfish 
    Gulper Eel 
    Guppy
    Gypsy Moth
    Haast’s Eagle
    Habu Snake
    Haddock
    Hagfish
    Haikouichthys
    Hainosaurus
    Hairy Frogfish
    Hairy Woodpecker
    Halibut
    Hallucigenia
    Hamburg Chicken
    Hammerhead Shark
    Hamster
    Harbor Seal
    Hardhead Catfish
    Hare
    Harlequin Rabbit
    Harlequin Snake
    Harp Seal
    Harpy Eagle
    Harrier
    Harris Hawk
    Hatzegopteryx
    Havamalt
    Havanese
    Havapoo
    Havashire
    Havashu
    Hawaiian Crow
    Hawaiian Goose (Nene)
    Hawaiian Monk Seal
    Hawk
    Hawk Moth Caterpillar
    Hedgehog
    Helicoprion
    Hellbender
    Hepatic Tanager (Red Tanager)
    Hercules Beetle
    Hercules Moth
    Hermit Crab
    Heron
    Herrerasaurus
    Herring
    Herring Gull
    Highland Cattle
    Himalayan
    Hippopotamus
    Hippopotamus gorgops
    Hoary Bat
    Hobo Spider
    Hognose snake
    Hokkaido
    Holy Cross Frog
    Honduran White Bat
    Honey Badger
    Honey Bee
    Honey Buzzard
    Hooded Oriole
    Hooded Seal
    Hook-Nosed Sea Snake
    Hoopoe
    Horgi
    Horn Shark
    Hornbill
    Horned Adder
    Horned Beetle
    Horned Frog
    Horned Grebe
    Horned Lizard
    Horned Viper
    Hornet
    Horse
    Horse Mackerel
    Horsefly
    Horseshoe Crab
    Houdan Chicken
    House Finch
    House Sparrow (English Sparrow)
    House wren
    Housefly
    Hovasaurus
    Hovawart
    Howler Monkey
    Human
    Humboldt Penguin
    Humboldt Squid
    Hummingbird
    Hummingbird Hawk-Moth
    Humpback Whale
    Huntaway
    Huntsman Spider
    Huskador
    Huskita
    Husky
    Husky Jack
    Huskydoodle
    Hyacinth Macaw
    Hyaenodon
    Hyena
    Ibex
    Ibis
    Ibizan Hound
    Icadyptes
    Icelandic Sheepdog
    Ichthyosaurus
    Ichthyostega
    Iguana
    Iguanodon
    IMG Boa Constrictor
    Immortal Jellyfish
    Impala
    Imperial Moth
    Indian Cobra
    Indian Elephant
    Indian Giant Squirrel
    Indian Palm Squirrel
    Indian python
    Indian Rhinoceros
    Indian Star Tortoise
    Indianmeal Moth
    Indigo Snake
    Indochinese Tiger
    Indri
    Inland Taipan
    Insect
    Insects
    IO Moth
    Irish Doodle
    Irish Elk
    Irish Setter
    Irish Terrier
    Irish Water Spaniel
    Irish WolfHound
    Italian Greyhound
    Ivory-billed woodpecker
    Jabiru
    Jacana
    Jack Russell
    Jack-Chi
    Jackabee
    Jackal
    Jackdaw
    Jackrabbit
    Jackson’s Chameleon
    Jagdterrier
    Jaguar
    Jaguarundi Cat
    Jamaican Boa
    Jamaican Iguana
    Japanese Bantam Chicken
    Japanese Beetle
    Japanese Chin
    Japanese Macaque
    Japanese rat snake
    Japanese Spitz
    Japanese Squirrel
    Japanese Terrier
    Javan Leopard
    Javan Rhinoceros
    Javanese
    Jellyfish
    Jerboa
    Jewel Beetle 
    John Dory
    Jonah Crab
    Joro Spider
    Josephoartigasia monesi
    Jumping Spider
    Jungle Carpet Python
    Junglefowl
    Kagu
    Kai Ken
    Kakapo
    Kaluga Sturgeon
    Kangal Shepard Dog
    Kangaroo
    Kangaroo Mouse
    Kangaroo Rat
    Katydid
    Kaua’i ‘Ō‘ō
    Kea
    Keagle
    Keel-Billed Toucan
    Keelback
    Keeshond
    Kelp Greenling
    Kentucky Warbler
    Kenyan Sand Boa
    Kermode Bear (Spirit Bear)
    Kerry Blue Terrier
    Kestrel
    Keta Salmon
    Key Deer
    Khao Manee
    Kiko Goat
    Killdeer
    Killer Clown Ball Python
    Killer Whale
    Killifish
    Kinabalu Giant Red Leech
    Kinder Goat
    King Cobra
    King Crab
    King Eider
    King Penguin
    King Quail
    King Rat Snake
    King Salmon
    King Shepherd
    King Snake
    King Vulture
    Kingfisher
    Kinkajou
    Kirtland’s snake
    Kishu
    Kissing Bugs
    Kit Fox
    Kitefin Shark
    Kiwi
    Klipspringer
    Knifefish
    Knight Anole
    Koala
    Kodiak Bear
    Kodkod
    Koi Fish
    Kokanee Salmon
    Komodo Dragon
    Komondor
    Kooikerhondje
    Kookaburra
    Koolie
    Korean Jindo
    Kori Bustard
    Kouprey
    Kowari
    Krait
    Krill
    Kudu
    Kudzu Bug
    Kuvasz
    Labahoula
    Labmaraner
    Labout’s Fairy Wrasse
    Labrabull
    Labradane
    Labradoodle
    Labrador Retriever
    Labraheeler
    Labrottie
    Lace Bug
    Lace Monitor
    Ladybug
    Ladyfish
    Lagotto Romagnolo
    Lake Sturgeon
    Lakeland Terrier
    LaMancha Goat
    Lamprey
    Lancashire Heeler
    Lancetfish
    Landseer Newfoundland
    Lappet-faced Vulture
    Lapponian Herder
    Larder Beetle
    Large Munsterlander
    Lavender Albino Ball Python
    Lawnmower Blenny
    Lazarus Lizard
    Leaf-Tailed Gecko
    Leatherback Sea Turtle
    Leech
    Leedsichthys
    Leichhardt’s Grasshopper
    Lemming
    Lemon Blast Ball Python
    Lemon Shark
    Lemur
    Leonberger
    Leopard
    Leopard Cat
    Leopard Frog
    Leopard Gecko
    Leopard Lizard
    Leopard Seal
    Leopard Shark
    Leopard Tortoise
    Leptocephalus
    Lesser Jacana
    Lhasa Apso
    Lhasapoo
    Liger
    Limpet
    Lineback Cattle
    Linnet
    Lion
    Lion’s Mane Jellyfish
    Lionfish
    Liopleurodon
    Little Brown Bat
    Little Penguin
    Livyatan
    Lizard
    Lizardfish
    Llama
    Loach
    Lobster
    Locust
    Lone Star Tick
    Long-Eared Owl
    Long-Haired Rottweiler
    Long-Tailed Tit
    Longfin Mako Shark
    Longnose Gar
    Lorikeet
    Loris
    Lowchen
    Lumpfish
    Lungfish
    Lurcher
    Lykoi Cat
    Lynx
    Lyrebird
    Lystrosaurus
    Macaque
    Macaroni Penguin
    Macaw
    Machaeroides
    Mackenzie Wolf
    Macrauchenia
    Madagascar Hissing Cockroach
    Madagascar Jacana
    Madagascar Tree Boa
    Madora Moth
    Magellanic Penguin
    Maggot
    Magnolia Warbler
    Magpie
    Magyarosaurus
    Mahi Mahi (Dolphin Fish)
    Maiasaura
    Maine Coon
    Mal Shi
    Malayan Civet
    Malayan Krait
    Malayan Tiger
    Malchi
    Mallard
    Malteagle
    Maltese
    Maltese Shih Tzu
    Maltipom
    Maltipoo
    Mamba
    Mamushi Snake
    Man of War Jellyfish
    Manatee
    Manchester Terrier
    Mandarin Rat Snake
    Mandrill
    Maned Wolf
    Mangrove Snake
    Manta Ray
    Mantella Frog
    Marabou Stork
    Marble Fox
    Maremma Sheepdog
    Marine Iguana
    Marine Toad
    Markhor
    Marmoset
    Marmot
    Marsh Frog
    Marsican Brown Bear
    Masiakasaurus
    Masked Angelfish
    Masked Palm Civet
    Massasauga
    Mastador
    Mastiff
    Mauzer
    May Beetle
    Mayfly
    Meagle
    Mealworm Beetle
    Mealybug
    Meerkat
    Megalania
    Megalochelys
    Megalodon
    Megamouth Shark
    Meganeura
    Megatherium
    Meiolania
    Mekong Giant Catfish
    Merganser
    Mexican Alligator Lizard
    Mexican Black Kingsnake
    Mexican Eagle (Northern crested caracara)
    Mexican Fireleg Tarantula
    Mexican Free-Tailed Bat
    Mexican Mole Lizard
    Microraptor
    Midget Faded Rattlesnake
    Miki
    Milk Snake
    Milkfish
    Millipede
    Mini Labradoodle
    Mini Lop
    Miniature Bull Terrier
    Miniature Husky
    Miniature Pinscher
    Mink
    Minke Whale
    Mississippi Kite
    Moccasin Snake
    Modern Game Chicken
    Mojarra
    Mojave Ball Python
    Mojave Rattlesnake
    Mola mola (Ocean Sunfish)
    Mole
    Mole Crab (Sand Flea)
    Mole Cricket
    Mole Snake
    Molly
    Monarch Butterfly
    Mongoose
    Mongrel
    Monitor Lizard
    Monkey
    Monkfish
    Monocled Cobra
    Monte Iberia Eleuth
    Moon Jellyfish
    Moonglow Boa
    Moorhen
    Moose
    Moray Eel
    Morkie
    Mosasaurus
    Moscow Watchdog
    Mosquito
    Moth
    Mountain Bluebird
    Mountain Cur
    Mountain Feist
    Mountain Gorilla
    Mountain Lion
    Mourning Dove
    Mouse
    Mozambique Spitting Cobra
    Mud Snake
    Mudi
    Mudpuppy
    Mule
    Mule Deer
    Mulga Snake
    Mullet Fish
    Muntjac
    Muscovy Duck
    Musk Deer
    Muskox
    Muskrat
    Mussurana Snake
    Muttaburrasaurus
    Muttaburrasaurus
    Myna Bird
    Nabarlek
    Naegleria
    Naked Mole Rat
    Narwhal
    Natterjack
    Nautilus
    Neanderthal
    Neapolitan Mastiff
    Nebelung
    Needlefish
    Nelore Cattle
    Neon Tetra
    Neptune Grouper
    Newfoundland
    Newfypoo
    Newt
    Nguni Cattle
    Nicobar pigeon
    Nigerian Goat
    Night Adder
    Night Heron
    Night Snake
    Nightingale
    Nightjar
    Nile Crocodile
    Nilgai
    No See Ums
    Norfolk Terrier
    Norrbottenspets
    North American Black Bear
    Northern Alligator Lizard
    Northern Cardinal
    Northern Flicker
    Northern Fur Seal
    Northern Harrier
    Northern Inuit Dog
    Northern Jacana
    Northern Parula
    Northern Potoo
    Northern Screamer
    Northern Water Snake
    Norway Rat
    Norwegian Buhund
    Norwegian Elkhound
    Norwegian Forest
    Norwegian Lundehund
    Norwich Terrier
    Nose-horned viper
    Nova Scotia Duck Tolling Retriever
    Nubian Goat
    Nudibranch
    Numbat
    Nuralagus
    Nurse Shark
    Nut Weevil
    Nuthatch
    Nutria
    Nyala
    Oak Toad
    Oarfish
    Ocean Whitefish
    Oceanic Whitetip Shark
    Ocellated Turkey
    Ocelot
    Octopus
    Oenpelli python
    Okapi
    Old English Sheepdog
    Old House Borer
    Oleander Hawk Moth
    Olingo
    Olive Baboon
    Olive python
    Olive Sea Snake
    Olm
    Onagadori Chicken
    Onager
    Opabinia
    Opah
    Opossum
    Oranda Goldfish
    Orang-utan
    Orange Baboon Tarantula
    Orange Dream Ball Python
    Orange Roughy 
    Orange Tanager (Orange-Headed Tanager)
    Orange-Crowned Warbler
    Orb Weaver
    Orchard Oriole
    Oregon Spotted Frog
    Ori-Pei
    Oribi
    Oriental Cockroach
    Oriental Dwarf Kingfisher
    Orinoco Crocodile
    Ornate Box Turtle
    Ornithocheirus
    Ornithomimus
    Ortolan Bunting
    Oscar Fish
    Osprey
    Ostracod
    Ostrich
    Otter
    Otterhound
    Ovenbird
    Oviraptor
    Owl
    Owl Butterfly
    Ox
    Oxpecker
    Oyster
    Oyster Toadfish
    Ozark Bass
    Pachycephalosaurus
    Pacific Sleeper Shark
    Paddlefish
    Pademelon
    Painted Turtle
    Palaeoloxodon namadicus
    Paleoparadoxia
    Palm Rat
    Palo Verde Beetle
    Panda Pied Ball Python
    Pangolin
    Panther
    Panthera atrox (American Lion)
    Papillon
    Paradise Flying Snake
    Parakeet
    Parasaurolophus
    Parrot
    Parrot Snake
    Parrotfish
    Parrotlet
    Parson Russell Terrier
    Parti Schnauzer
    Partridge
    Patagotitan
    Patas Monkey
    Patterdale Terrier
    Pea Puffer
    Peacock
    Peacock Butterfly
    Peacock Spider
    Peagle
    Peekapoo
    Pekingese
    Pelagornis
    Pelagornithidae
    Pelican
    Pelycosaurs
    Pembroke Welsh Corgi
    Penguin
    Pennsylvania Wood Cockroach
    Peppered Moth
    Peppermint Angelfish
    Perch Fish
    Pere Davids Deer
    Peregrine Falcon
    Peringuey’s Adder
    Perro De Presa Canario
    Persian
    Peruvian Guinea Pig
    Peruvian Inca Orchid
    Pesquet’s Parrot (Dracula Parrot)
    Petit Basset Griffon Vendéen
    Petite Goldendoodle
    Pharaoh Hound
    Pheasant
    Pheasant-tailed Jacana
    Philippine Cobra
    Phoenix Chicken
    Phorusrhacos
    Phytosaurs
    Picardy Spaniel
    Pictus Catfish
    Piebald Dachshund
    Pied Ball Python
    Pied Tamarin
    Pied-Billed Grebe
    Pig
    Pigeon
    Pika
    Pike Fish
    Pileated Woodpecker
    Pinacate Beetle
    Pine Beetle
    Pine Marten
    Pine Siskin
    Pine Snake
    Pine Snake
    Pink Fairy Armadillo
    Pink Salmon
    Pink Toed Tarantula
    Pink-Necked Green Pigeon
    Pipe Snake
    Pipefish
    Piranha
    Pit Bull
    Pit Viper
    Pitador
    Pitsky
    Plains Hognose Snake
    Platinum Arowana
    Platybelodon
    Platypus
    Plesiosaur
    Pliosaur
    Plott Hounds
    Pocket Beagle
    Pocket Pitbull
    Podenco Canario
    Pointer
    Poison Dart Frog
    Polacanthus
    Polar Bear
    Polecat
    Polish Lowland Sheepdog
    Polish Tatra Sheepdog
    Polka Dot Stingray
    Pollock Fish
    Polyphemus moth
    Pomapoo
    Pomchi
    Pomeagle
    Pomeranian
    Pomsky
    Pond Skater
    Poochon
    Poodle
    Poogle
    Pool Frog
    Porbeagle Shark
    Porcupine
    Porpoise
    Portuguese Podengo
    Possum
    Potoo
    Potoroo
    Powderpost Beetle
    Prairie Chicken
    Prairie Dog
    Prairie Rattlesnake
    Prawn
    Praying Mantis
    Proboscis Monkey
    Procoptodon
    Pronghorn
    Psittacosaurus
    Psittacosaurus
    Pteranodon
    Pterodactyl
    Pudelpointer
    Puff Adder
    Pufferfish
    Puffin
    Pug
    Pugapoo
    Puggle
    Pugshire
    Puli
    Puma
    Pumi
    Pumpkin Patch Tarantula
    Purple Emperor Butterfly
    Purple Finch
    Purple Gallinule
    Purple Tarantula
    Purussaurus
    Puss Moth
    Pygmy Hippopotamus
    Pygmy Marmoset (Finger Monkey)
    Pygmy python
    Pygmy Shark
    Pygora Goat
    Pyjama Shark
    Pyrador
    Pyredoodle
    Pyrenean Mastiff
    Pyrenean Shepherd
    Python
    Quagga
    Quail
    Queen snake
    Quetzal
    Quetzalcoatlus northropi
    Quokka
    Quoll
    Rabbit
    Raccoon
    Raccoon Dog
    Racer Snake
    Radiated Tortoise
    Ragamuffin
    Ragdoll
    Raggle
    Rainbow Boa
    Rainbow Kribs (Kribensis)
    Rainbow Shark
    Rat
    Rat Snakes
    Rat Terrier
    Rattlesnake
    Red Ackie Monitor
    Red Aphids
    Red Deer
    Red Diamondback Rattlesnake
    Red Finch
    Red Fox
    Red Kite
    Red Knee Tarantula
    Red Panda
    Red Paper Wasp
    Red Racer Snake
    Red Spitting Cobra
    Red Squirrel
    Red Tail Boa (common boa)
    Red Wolf
    Red-Bellied Black Snake
    Red-Bellied Woodpecker
    Red-Billed Quelea Bird
    Red-Eared Slider
    Red-Eyed Tree Frog
    Red-Footed Tortoise
    Red-handed Tamarin
    Red-Headed Vulture
    Red-Lipped Batfish
    Red-Shouldered Hawk
    Red-winged blackbird
    Redback Spider
    Redbone Coonhound
    Redhump Eartheater
    Redstart
    Redtail Catfish
    Reef Shark
    Reindeer
    Repenomamus
    Reticulated python
    Rex Rabbit
    Rhamphosuchus
    Rhea
    Rhesus Macaque
    Rhino Beetle
    Rhino Viper
    Rhinoceros
    Rhodesian Ridgeback
    Rhombic Egg-Eater Snake
    Ribbon Eel
    Ribbon Snake
    Rim Rock Crowned Snake
    Ring-billed Gull
    Ringed Kingfisher
    Rinkhals Snake
    River Otter
    River Turtle
    Roadrunner
    Robber Flies
    Robin
    Rock Crab
    Rock Hyrax
    Rock Python
    Rockfish
    Rockhopper Penguin
    Rodents
    Roe Deer
    Rooster
    Root Aphids
    Rose-breasted Grosbeak
    Roseate Spoonbill
    Rosy Boa
    Rotterman
    Rottsky
    Rottweiler
    Rough Earth Snake
    Rough Green Snake
    Rough-Legged Hawk (Rough-Legged Buzzard)
    Rove Beetle
    Royal Penguin
    Rubber Boa
    Ruby-Crowned Kinglet
    Ruby-Throated Hummingbird
    Ruddy Turnstone
    Rufous Hummingbird
    Russel’s Viper
    Russell Terrier
    Russian Bear Dog
    Russian Blue
    Russian Tortoise
    Saanen Goat
    Saarloos Wolfdog
    Saber-Toothed Tiger
    Sable
    Sable Black German Shepherd
    Sable Ferret
    Saddleback Caterpillar
    Saiga
    Saint Berdoodle
    Saint Bernard
    Saint Shepherd
    Salamander
    Salmon
    Salmon Shark
    Saluki
    Sambar
    Samoyed
    San Francisco Garter Snake
    Sand Cat
    Sand Crab
    Sand Dollar
    Sand Lizard
    Sand Tiger Shark
    Sand Viper
    Sandhill Crane
    Saola
    Sapsali
    Sarcosuchus
    Sardines
    Sarkastodon
    Sarplaninac
    Sarus Crane
    Satanic leaf-tailed gecko
    Saturniidae Moth
    Sauropoda
    Sauropoda
    Savanna Goat
    Savannah Monitor
    Savannah Sparrow
    Savu Python
    Saw-scaled viper
    Sawfish
    Scallops
    Scarab Beetle
    Scarlet Kingsnake
    Scarlet Macaw
    Scarlet Tanager
    Schapendoes
    Schipperke
    Schneagle
    Schnoodle
    Scimitar-horned Oryx
    Scorpion
    Scorpion Fish
    Scotch Collie
    Scottish Deerhound
    Scottish Fold Cat
    Scottish Terrier
    Scrotum Frog
    Sculpin
    Scutosaurus
    Sea Anemone
    Sea Dragon
    Sea Eagle
    Sea Lion
    Sea Otter
    Sea Roach
    Sea Slug
    Sea Snake
    Sea Squirt
    Sea Turtle
    Sea Urchin
    Seagull
    Seahorse
    Seal
    Sealyham Terrier
    Sedge Warbler
    Sei Whale
    Senegal Parrot
    Senepol Cattle
    Sequined Spider
    Serval
    Seymouria
    Shark
    Sharp-Shinned Hawk
    Sharp-Tailed Snake
    Shastasaurus
    Sheep
    Sheepadoodle
    Sheepshead Fish
    Shepadoodle
    Shepkita
    Shepweiler
    Shetland Sheepdog
    Shiba Inu
    Shichi
    Shih Poo
    Shih Tzu
    Shikoku
    Shiloh Shepherd
    Shiranian
    Shoebill Stork
    Shollie
    Short-Eared Owl
    Short-Faced Bear
    Shortfin Mako Shark
    Shrew
    Shrimp
    Siamese
    Siberian
    Siberian Husky
    Siberian Ibex
    Siberian Retriever
    Siberian Tiger
    Siberpoo
    Sidewinder
    Sika Deer
    Silken Windhound
    Silkie Chicken
    Silky Shark
    Silky Terrier
    Silver Dollar
    Silver Labrador
    Simbakubwa
    Sinosauropteryx
    Sivatherium
    Sixgill shark
    Skate Fish
    Skeleton Tarantula
    Skink Lizard
    Skipjack Tuna
    Skua
    Skunk
    Skye Terrier
    Sleeper Shark
    Sloth
    Slovak Cuvac
    Slow Worm
    Slug
    Smallmouth Bass
    Smilosuchus
    Smokybrown Cockroach
    Smooth Earthsnake
    Smooth Fox Terrier
    Smooth Green Snake
    Smooth Hammerhead Shark
    Smooth Snake
    Snail
    Snake
    Snapping Turtle
    Snook Fish
    Snorkie
    Snouted Cobra
    Snow Bunting
    Snow Crab
    Snow Leopard
    Snowberry Clearwing Moth
    Snowflake Eel
    Snowshoe
    Snowshoe Hare
    Snowy Owl
    Sockeye Salmon
    Soldier Beetle
    Somali
    Song Sparrow
    Song Thrush
    South China Tiger
    Southern Black Racer
    Southern Hognose Snake
    Southern Pacific Rattlesnake
    Spadefoot Toad
    Spanador
    Spanish Goat
    Spanish Mastiff
    Spanish Water Dog
    Sparrow
    Sparrowhawk
    Speckled Kingsnake
    Spectacled Bear
    Sperm Whale
    Sphynx
    Spider
    Spider Ball Python
    Spider Beetle
    Spider Monkey
    Spider Wasp
    Spider-Tailed Horned Viper
    Spinner Shark
    Spinone Italiano
    Spinosaurus
    Spiny bush viper
    Spiny Dogfish
    Spiny Hill Turtle
    Spitting Cobra
    Spixs Macaw
    Sponge
    Spongy Moth
    Spotted Gar
    Spotted Lanternfly
    Spotted python
    Spotted Skunk
    Springador
    Springbok
    Springerdoodle
    Squash Beetle
    Squid
    Squirrel
    Squirrel Monkey
    Squirrelfish
    Sri Lankan Elephant
    Stabyhoun
    Staffordshire Bull Terrier
    Stag Beetle
    Standard Schnauzer
    Star-nosed mole
    Starfish
    Stargazer Fish
    Steelhead Salmon
    Steller’s Sea Cow
    Stick Insect
    Stiletto Snake
    Stingray
    Stoat
    Stone Crab
    Stonechat
    Stonefish
    Stoplight Loosejaw
    Stork
    Strawberry Hermit Crab
    Striped Hyena
    Striped Rocket Frog
    Stupendemys
    Sturgeon
    Styracosaurus
    Suchomimus
    Sucker Fish
    Sugar Glider
    Sulcata Tortoise
    Sumatran Elephant
    Sumatran Orang-utan
    Sumatran Rhinoceros
    Sumatran Tiger
    Summer Tanager
    Sun Bear
    Sunbeam Snake
    Sunset Ball Python
    Super Pastel Ball Python
    Supersaurus
    Superworm
    Surgeonfish
    Swai Fish
    Swainsons Hawk
    Swallow
    Swan
    Swedish Elkhound
    Swedish Lapphund
    Swedish Vallhund
    Swordfish
    Syrian Hamster
    Taco Terrier
    Tailless Whip Scorpion
    Taipan
    Takin
    Tamaskan
    Tang
    Tangerine Leopard Gecko
    Tapanuli Orang-utan
    Tapir
    Tarantula Hawk
    Tarbosaurus
    Tarpon
    Tarsier
    Tasmanian Devil
    Tasmanian Tiger
    Tasmanian Tiger Snake
    Tawny Frogmouth
    Tawny Owl
    Teacup Miniature Horse
    Teddy Bear Hamster
    Teddy Guinea Pig
    Teddy Roosevelt Terrier
    Telescope Fish
    Ten-Lined June Beetle
    Tennessee Walking Horse
    Tentacled Snake
    Tenterfield Terrier
    Termite
    Terrier
    Terror Bird
    Tetra
    Texas Blind Snake
    Texas Brown Tarantula
    Texas Coral Snake
    Texas Garter Snake
    Texas Heeler
    Texas Indigo Snake
    Texas Night Snake
    Texas Rat Snake
    Texas Spiny Lizard
    Thai Ridgeback
    Thalassomedon
    Thanatosdrakon
    Thornback Ray
    Thorny Devil
    Thresher Shark
    Thrush
    Thylacoleo
    Thylacoleo carnifex
    Thylacosmilus
    Tibetan Fox
    Tibetan Mastiff
    Tibetan Spaniel
    Tibetan Terrier
    Tick
    Tiffany
    Tiger
    Tiger Beetle
    Tiger Moth
    Tiger Rattlesnake
    Tiger Salamander
    Tiger Shark
    Tiger snake
    Timber Rattlesnake (Canebrake Rattlesnake)
    Timor python
    Tire Track Eel
    Titan Beetle
    Titanoboa
    Toadfish
    Tomato Hornworm
    Torkie
    Tornjak
    Tortoise
    Tosa
    Toucan
    Towhee
    Toxodon
    Toy Fox Terrier
    Toy Poodle
    Transylvanian Hound
    Trapdoor spider
    Tree Frog
    Tree Kangaroo
    Tree Snake
    Tree swallow
    Tree Viper (Bamboo Viper)
    Treecreeper
    Treeing Tennessee Brindle
    Treeing Walker Coonhound
    Triggerfish
    Troodon
    Tropicbird
    Trout
    Tsetse Fly
    Tuatara
    Tufted Coquette
    Tufted Titmouse
    Tully Monster
    Tuna
    Turaco
    Turkey
    Turkey Vulture
    Turkish Angora
    Turtles
    Tusoteuthis
    Twig Snake
    Tylosaurus
    Tyrannosaurus Rex
    Uakari
    Uguisu
    Uinta Ground Squirrel
    Uintatherium
    Umbrellabird
    Unau (Linnaeus’s Two-Toed Sloth)
    Underwing Moth
    Upland Sandpiper
    Ural owl
    Urechis unicinctus (Penis Fish)
    Urial
    Uromastyx (Spiny-Tailed Lizard)
    Urutu Snake
    Utonagan
    Valley Bulldog
    Vampire Bat
    Vampire Crab 
    Vampire Squid
    Vaquita
    Vegavis
    Velociraptor
    Venus Flytrap
    Vermilion Flycatcher
    Vervet Monkey
    Vicuña
    Vine Snake
    Vinegaroon
    Viper
    Viper Boa
    Viper Shark (dogfish)
    Viperfish
    Virgin Islands Dwarf Gecko
    Vizsla
    Vole
    Volpino Italiano
    Vulture
    Wahoo Fish
    Waimanu
    Walking Catfish
    Wallaby
    Walleye Fish
    Walrus
    Wandering Albatross
    Warbler
    Warthog
    Wasp
    Water Beetle
    Water Buffalo
    Water Bug
    Water Dragon
    Water Vole
    Wattled Jacana
    Wax Moth
    Weasel
    Weaver Bird
    Weimaraner
    Weimardoodle
    Wels Catfish
    Welsh Black Cattle
    Welsh Corgi
    Welsh Springer Spaniel
    Welsh Terrier
    West Highland Terrier
    West Siberian Laika
    Western Blind Snake
    Western Diamondback Rattlesnake
    Western Gorilla
    Western Green Mamba
    Western Hognose Snake
    Western Lowland Gorilla
    Western Rat Snake
    Western Tanager
    Westiepoo
    Whale Shark
    Wheaten Terrier
    Whimbrel
    Whinchat
    Whippet
    Whiptail Lizard
    White Butterfly
    White Catfish
    White Ferret / Albino Ferrets
    White Rhinoceros
    White Shark
    White Sturgeon 
    White Tiger
    White-Crowned Sparrow
    White-Eyed Vireo
    White-Faced Capuchin
    White-shouldered House Moth
    White-tail deer
    White-Tailed Eagle
    Whitetail Deer
    Whiting
    Whoodle
    Whooping Crane
    Wild Boar
    Wildebeest
    Willow Warbler
    Winter Moth
    Wire Fox Terrier
    Wirehaired Pointing Griffon
    Wirehaired Vizsla
    Wiwaxia
    Wolf
    Wolf Eel
    Wolf Snake
    Wolf Spider
    Wolffish
    Wolverine
    Woma python
    Wombat
    Wood Bison
    Wood Frog
    Wood Tick
    Wood Turtle
    Woodlouse
    Woodlouse Spider
    Woodpecker
    Woodrat
    Woolly Aphids
    Woolly Mammoth
    Woolly Monkey
    Woolly Rhinoceros
    Worm
    Worm Snake
    Wrasse
    Writing Spider
    Wrought Iron Butterflyfish
    Wryneck
    Wyoming Toad
    X-Ray Tetra
    Xeme (Sabine’s Gull)
    Xenacanthus
    Xenoceratops
    Xenotarsosaurus
    Xerus
    Xiaosaurus
    Xiaotingia
    Xiphactinus
    Xoloitzcuintli
    Yak
    Yakutian Laika
    Yarara
    Yellow Anaconda
    Yellow Aphids
    Yellow Bellied Sapsucker
    Yellow Belly Ball Python
    Yellow Cobra
    Yellow Crazy Ant
    Yellow Perch
    Yellow Sac Spider
    Yellow Spotted Lizard
    Yellow Tanager (Black-and-Yellow Tanager)
    Yellow Tang
    Yellow-Bellied Sea Snake
    Yellow-Eyed Penguin
    Yellowfin Tuna
    Yellowhammer
    Yellowthroat
    Yeti Crab
    Yokohama chicken
    Yoranian
    Yorkie Bichon
    Yorkie-poo
    Yorkshire Terrier
    Zebra
    Zebra Finch
    Zebra Mussels
    Zebra Pleco
    Zebra Shark
    Zebra Snake
    Zebra Spitting Cobra
    Zebra Tarantula
    Zebu
    Zokor
    Zonkey
    Zorse
    Zuchon
  ],
  countries: [
   " Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan" ,
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Ivory Coast",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    'Dominica',
    "Dominican Republic",
    "East Timor ",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Lesotho",
    'Liberia',
    "Libya",
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Lucia',
    'Saint Kitts and Nevis',
    'Samoa',
    'San Marino',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Tibet',
    'Timor',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad And Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands' ,
    'Wallis and Futuna Islands',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;