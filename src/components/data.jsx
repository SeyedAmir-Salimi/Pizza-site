import Amatriciana from './Pizza/Amatriciana.jpg';
import Arrabiata from './Pizza/Arrabbiata.jpg';
import Asparagi from './Pizza/Asparagi.jpg';
import Boscaiola from './Pizza/Boscaiola.jpg';
import Bufalina from './Pizza/Bufalina.jpg';
import Calamari from './Pizza/Calamari.jpg';
import CalzoneFarcito from './Pizza/Calzone-Farcito.jpg';
import Calzone from './Pizza/Calzone.jpg';
import Capricciosa from './Pizza/Capricciosa.jpg';
import Carbonara from './Pizza/Carbonara.jpg';
import Contadina from './Pizza/Contadina.jpg';
import CrudoeBufala from './Pizza/Crudo-e-Bufala.jpg';
import Deliziosa from './Pizza/Deliziosa.jpg';
import Diavola from './Pizza/Diavola.jpg';
import FruttidiMare from './Pizza/Frutti-di-Mare.jpg';
import Giardino from './Pizza/Giardino.jpg';
import GorgoeSalamePiccante from './Pizza/Gorgo-e-Salame-Piccante.jpg';
import Gorgonzola from './Pizza/Gorgonzola.jpg';
import Maialona from './Pizza/Maialona.jpg';
import MareeMonti from './Pizza/Mare-e-Monti.jpg';
import Margherita from './Pizza/Margherita.jpg';
import Marinara from './Pizza/Marinara.jpg';
import Napoli from './Pizza/Napoli.jpg';
import PannaeCrudo from './Pizza/Panna-e-Crudo.jpg';
import Parmigiana from './Pizza/Parmigiana.jpg';
import Piemontese from './Pizza/Piemontese.jpg';
import Porcini from './Pizza/Porcini.jpg';
import ProsciuttoeFunghi from './Pizza/Prosciutto-e-Funghi.jpg';
import Prosciutto from './Pizza/Prosciutto.jpg';
import Pugliese from './Pizza/Pugliese.jpg';
import QuattroFormaggi from './Pizza/Quattro-Formaggi.jpg';
import QuattroStagioni from './Pizza/Quattro-Stagioni.jpg';
import RaggiodiSole from './Pizza/Raggio-di-Sole.jpg';
import Romana from './Pizza/Romana.jpg';
import Salsiccia from './Pizza/Salsiccia.jpg';
import Siciliana from './Pizza/Siciliana.jpg';
import SpeckeBrie from './Pizza/Speck-e-Brie.jpg';
import Tedesca from './Pizza/Tedesca.jpg';
import Tirolese from './Pizza/Tirolese.jpg';
import TonnoeCipolle from './Pizza/Tonno-e-Cipolle.jpg';
import Trevisana from './Pizza/Trevisana.jpg';
import Valtellina from './Pizza/Valtellina.jpg';
import Verdure from './Pizza/Verdure.jpg';
import Wurstel from './Pizza/Wurstel.jpg';

export default [
	{
		sys: {
			id: '1'
		},
		fields: {
			name: 'Margherita',
			slug: 'Margherita',
			price: 5.0,
			Prosciutto: false,
			funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Margherita,
			images: [
				{
					fields: {
						file: {
							url: Margherita
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '2'
		},
		fields: {
			name: 'Marinara',
			slug: 'Marinara',
			price: 4.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Origano', 'Aglio' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Marinara,
			images: [
				{
					fields: {
						file: {
							url: Marinara
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '3'
		},
		fields: {
			name: 'Capricciosa',
			slug: 'Capricciosa',
			price: 7.5,
			Prosciutto: true,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Prosciutto', 'Funghi', 'Carciofi' ],
			month: true,
			inCarta: false,
			count: 0,
			total: 0,
			image: Capricciosa,
			images: [
				{
					fields: {
						file: {
							url: Capricciosa
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '4'
		},
		fields: {
			name: 'Prosciutto',
			slug: 'Prosciutto',
			price: 6.5,
			Prosciutto: true,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Prosciutto' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Prosciutto,
			images: [
				{
					fields: {
						file: {
							url: Prosciutto
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '5'
		},
		fields: {
			name: 'Prosciutto e Funghi',
			slug: 'Prosciutto-e-Funghi',
			price: 7.0,
			Prosciutto: true,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Prosciutto', 'Funghi' ],
			month: true,
			inCarta: false,
			count: 0,
			total: 0,
			image: ProsciuttoeFunghi,
			images: [
				{
					fields: {
						file: {
							url: ProsciuttoeFunghi
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '6'
		},
		fields: {
			name: 'Quattro Stagioni',
			slug: 'Quattro-Stagioni',
			price: 7.5,
			Prosciutto: true,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Prosciutto', 'Funghi', 'Carciofi', 'Olive Nere' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: QuattroStagioni,
			images: [
				{
					fields: {
						file: {
							url: QuattroStagioni
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '7'
		},
		fields: {
			name: 'Porcini',
			slug: 'Porcini',
			price: 7.0,
			Prosciutto: false,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Funghi Porcini' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Porcini,
			images: [
				{
					fields: {
						file: {
							url: Porcini
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '8'
		},
		fields: {
			name: 'Bufalina',
			slug: 'Bufalina',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella di Bufala', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Bufalina,
			images: [
				{
					fields: {
						file: {
							url: Bufalina
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '9'
		},
		fields: {
			name: 'Verdure',
			slug: 'Verdure',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Verdure Grigliate', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Verdure,
			images: [
				{
					fields: {
						file: {
							url: Verdure
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '10'
		},
		fields: {
			name: 'Diavola',
			slug: 'Diavola',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Salame Piccante' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Diavola,
			images: [
				{
					fields: {
						file: {
							url: Diavola
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '11'
		},
		fields: {
			name: 'Wurstel',
			slug: 'Wurstel',
			price: 6.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Wurstel' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Wurstel,
			images: [
				{
					fields: {
						file: {
							url: Wurstel
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '12'
		},
		fields: {
			name: 'Tedesca',
			slug: 'Tedesca',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Patatine Fritte', 'Wurstel' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Tedesca,
			images: [
				{
					fields: {
						file: {
							url: Tedesca
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '13'
		},
		fields: {
			name: 'Gorgonzola',
			slug: 'Gorgonzola',
			price: 6.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Gogonzola' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Gorgonzola,
			images: [
				{
					fields: {
						file: {
							url: Gorgonzola
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '14'
		},
		fields: {
			name: 'Quattro Formaggi',
			slug: 'Quattro-Formaggi',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Gogonzola', 'Fontina', 'Scamorza', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: QuattroFormaggi,
			images: [
				{
					fields: {
						file: {
							url: QuattroFormaggi
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '15'
		},
		fields: {
			name: 'Frutti di Mare',
			slug: 'Frutti-di-Mare',
			price: 10.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Frutti di Mare' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: FruttidiMare,
			images: [
				{
					fields: {
						file: {
							url: FruttidiMare
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '16'
		},
		fields: {
			name: 'Calamari',
			slug: 'Calamari',
			price: 10.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Calamari Fritti' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Calamari,
			images: [
				{
					fields: {
						file: {
							url: Calamari
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '17'
		},
		fields: {
			name: 'Tonno e Cipolle',
			slug: 'Tonno-e-Cipolle',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Tonno', 'Cipolle', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: TonnoeCipolle,
			images: [
				{
					fields: {
						file: {
							url: TonnoeCipolle
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '18'
		},
		fields: {
			name: 'Pugliese',
			slug: 'Pugliese',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Cipolle', 'Olive Nere', 'Grana', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Pugliese,
			images: [
				{
					fields: {
						file: {
							url: Pugliese
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '19'
		},
		fields: {
			name: 'Napoli',
			slug: 'Napoli',
			price: 6.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Acciughe', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Napoli,
			images: [
				{
					fields: {
						file: {
							url: Napoli
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '20'
		},
		fields: {
			name: 'Siciliana',
			slug: 'Siciliana',
			price: 6.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Olive', 'Capperi', 'Acciughe', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Siciliana,
			images: [
				{
					fields: {
						file: {
							url: Siciliana
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '21'
		},
		fields: {
			name: 'Romana',
			slug: 'Romana',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Capperi', 'Acciughe', 'Origano' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Romana,
			images: [
				{
					fields: {
						file: {
							url: Romana
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '22'
		},
		fields: {
			name: 'Calzone',
			slug: 'Calzone',
			price: 7.0,
			Prosciutto: true,
			Funghi: false,
			extras: [ 'Mozzarella', 'Prosciutto' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Calzone,
			images: [
				{
					fields: {
						file: {
							url: Calzone
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '23'
		},
		fields: {
			name: 'Calzone Farcito',
			slug: 'Calzone-Farcito',
			price: 8.0,
			Prosciutto: true,
			Funghi: true,
			extras: [ 'Mozzarella', 'Prosciutto', 'Funghi', 'Carciofi' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: CalzoneFarcito,
			images: [
				{
					fields: {
						file: {
							url: CalzoneFarcito
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '24'
		},
		fields: {
			name: 'Mare e Monti',
			slug: 'Mare-e-Monti',
			price: 8.5,
			Prosciutto: false,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Funghi Porcini', 'Gamberetti' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: MareeMonti,
			images: [
				{
					fields: {
						file: {
							url: MareeMonti
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '25'
		},
		fields: {
			name: 'Tirolese',
			slug: 'Tirolese',
			price: 8.0,
			Prosciutto: false,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'Funghi Porcini', 'Speck' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Tirolese,
			images: [
				{
					fields: {
						file: {
							url: Tirolese
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '26'
		},
		fields: {
			name: 'Speck e Brie',
			slug: 'Speck-e-Brie',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Speck', 'Brie' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: SpeckeBrie,
			images: [
				{
					fields: {
						file: {
							url: SpeckeBrie
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '27'
		},
		fields: {
			name: 'Crudo e Bufala',
			slug: 'Crudo-e-Bufala',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Bufala', 'Crudo' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: CrudoeBufala,
			images: [
				{
					fields: {
						file: {
							url: CrudoeBufala
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '28'
		},
		fields: {
			name: 'Panna e Crudo',
			slug: 'Panna-e-Crudo',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Panne', 'Crudo' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: PannaeCrudo,
			images: [
				{
					fields: {
						file: {
							url: PannaeCrudo
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '29'
		},
		fields: {
			name: 'Piemontese',
			slug: 'Piemontese',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Scamorza', 'Speck' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Piemontese,
			images: [
				{
					fields: {
						file: {
							url: Piemontese
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '30'
		},
		fields: {
			name: 'Valtellina',
			slug: 'Valtellina',
			price: 8.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Bresaola', 'Scaglie di Grana', 'Rucola' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Valtellina,
			images: [
				{
					fields: {
						file: {
							url: Valtellina
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '31'
		},
		fields: {
			name: 'Parmigiana',
			slug: 'Parmigiana',
			price: 7.5,
			Prosciutto: true,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Melanzane', 'Prosciutto Cotto', 'Basilico', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Parmigiana,
			images: [
				{
					fields: {
						file: {
							url: Parmigiana
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '32'
		},
		fields: {
			name: 'Salsiccia',
			slug: 'Salsiccia',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Salsiccia' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Salsiccia,
			images: [
				{
					fields: {
						file: {
							url: Salsiccia
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '33'
		},
		fields: {
			name: 'Deliziosa',
			slug: 'Deliziosa',
			price: 8.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Salmone Affumicato', 'Rucola' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Deliziosa,
			images: [
				{
					fields: {
						file: {
							url: Deliziosa
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '34'
		},
		fields: {
			name: 'Asparagi',
			slug: 'Asparagi',
			price: 6.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Asparagi', 'Grana' ],
			month: true,
			inCarta: false,
			count: 0,
			total: 0,
			image: Asparagi,
			images: [
				{
					fields: {
						file: {
							url: Asparagi
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '35'
		},
		fields: {
			name: 'Raggio di Sole',
			slug: 'Raggio-di-Sole',
			price: 8.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Asparagi', 'Pancetta', 'Uovo', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: RaggiodiSole,
			images: [
				{
					fields: {
						file: {
							url: RaggiodiSole
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '36'
		},
		fields: {
			name: 'Giardino',
			slug: 'Giardino',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Insalata', 'Pomodorini', 'Mozzarella', 'Olive Verdi', 'Mais' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Giardino,
			images: [
				{
					fields: {
						file: {
							url: Giardino
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '37'
		},
		fields: {
			name: 'Arrabiata',
			slug: 'Arrabiata',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Salame Piccante', 'Peperoni', 'Peperoncino' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Arrabiata,
			images: [
				{
					fields: {
						file: {
							url: Arrabiata
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '38'
		},
		fields: {
			name: 'Gorgo e Salame Piccante',
			slug: 'Gorgo-e-Salame-Piccante',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Gorgonzola', 'Salame Piccante' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: GorgoeSalamePiccante,
			images: [
				{
					fields: {
						file: {
							url: GorgoeSalamePiccante
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '39'
		},
		fields: {
			name: 'Amatriciana',
			slug: 'Amatriciana',
			price: 7.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Pancetta', 'Cipolle', 'Peperoncino' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Amatriciana,
			images: [
				{
					fields: {
						file: {
							url: Amatriciana
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '40'
		},
		fields: {
			name: 'Maialona',
			slug: 'Maialona',
			price: 8.0,
			Prosciutto: true,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Wurstel', 'Salame Piccante', 'Prosciutto Cotto' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Maialona,
			images: [
				{
					fields: {
						file: {
							url: Maialona
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '41'
		},
		fields: {
			name: 'Trevisana',
			slug: 'Trevisana',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Trevisano', 'Scamorza', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Trevisana,
			images: [
				{
					fields: {
						file: {
							url: Trevisana
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '42'
		},
		fields: {
			name: 'Boscaiola',
			slug: 'Boscaiola',
			price: 8.0,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Pomodoro', 'Mozzarella', 'Porcini', 'Scaglie di Grana', 'Rucola' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Boscaiola,
			images: [
				{
					fields: {
						file: {
							url: Boscaiola
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '43'
		},
		fields: {
			name: 'Carbonara',
			slug: 'Carbonara',
			price: 7.5,
			Prosciutto: false,
			Funghi: false,
			extras: [ 'Mozzarella', 'Pancetta', 'Uovo', 'Grana', 'Pepe' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Carbonara,
			images: [
				{
					fields: {
						file: {
							url: Carbonara
						}
					}
				}
			]
		}
	},
	{
		sys: {
			id: '44'
		},
		fields: {
			name: 'Contadina',
			slug: 'Contadina',
			price: 7.5,
			Prosciutto: false,
			Funghi: true,
			extras: [ 'Pomodoro', 'Mozzarella', 'PAsparagi', 'Funghi', 'Pancetta', 'Grana' ],
			month: false,
			inCarta: false,
			count: 0,
			total: 0,
			image: Contadina,
			images: [
				{
					fields: {
						file: {
							url: Contadina
						}
					}
				}
			]
		}
	}
];
