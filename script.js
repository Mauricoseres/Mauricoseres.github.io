const pharmacyData = {
    "A": [
        { "name": "Armellini", "address": "Av. Central y 31 Oeste", "lat": -33.3871774, "lng": -60.1776638 },
        { "name": "Cabrera", "address": "Av. Falcón 222", "lat": -33.3366599, "lng": -60.2129785 },
        { "name": "Diamante", "address": "Belgrano y Alvarez", "lat": -33.3444618, "lng": -60.2280795 },
        { "name": "Furlan", "address": "9 de Julio 260", "lat": -33.3336142, "lng": -60.2296463 },
        { "name": "Gonzalez", "address": "Pacín Nación 314", "lat": -33.3355785, "lng": -60.2236905 },
        { "name": "Hector Lopez", "address": "Maipú 794", "lat": -33.3371376, "lng": -60.2323137 }
    ],
    "B": [
        { "name": "Carrera", "address": "Almafuerte y España", "lat": -33.3388274, "lng": -60.2134951 },
        { "name": "Coccaro", "address": "Rivadavia 987 bis", "lat": -33.3329622, "lng": -60.2273605 },
        { "name": "Del Pueblo", "address": "Nación 450", "lat": -33.3266697, "lng": -60.2342123 },
        { "name": "Dotto", "address": "Pringles y Alvear", "lat": -33.3318645, "lng": -60.2389851 },
        { "name": "Melone", "address": "Pte. Perón 858", "lat": -33.3306856, "lng": -60.247207 },
        { "name": "Taljame", "address": "Alberdi 346", "lat": -33.3235471, "lng": -60.2300551 }
    ],
    "C": [
        { "name": "Amefarma SCS", "address": "Mitre 200", "lat": -33.3237468, "lng": -60.2321459 },
        { "name": "Garetto", "address": "Morteo y España", "lat": -33.3312479, "lng": -60.2429275 },
        { "name": "Liliana Latorre", "address": "Ameghino 347", "lat": -33.336489, "lng": -60.2191157 },
        { "name": "Ponce", "address": "Juramento 1445", "lat": -33.342801, "lng": -60.2279518 },
        { "name": "Rasetto", "address": "Viale 401", "lat": -33.3227495, "lng": -60.236997 },
        { "name": "San Nicolás", "address": "Cochabamba 357", "lat": -33.3310752, "lng": -60.2310511 }
    ],
    "D": [
        { "name": "Boffa", "address": "Av. Savio 1142", "lat": -33.3592461, "lng": -60.200964 },
        { "name": "Cej", "address": "Maipú 495", "lat": -33.3533087, "lng": -60.2148297 },
        { "name": "De Los Arroyos", "address": "Nación 102", "lat": -33.3464078, "lng": -60.2186529 },
        { "name": "Lombardi", "address": "Alberdi 548", "lat": -33.3340065, "lng": -60.2321578 },
        { "name": "Porta", "address": "Av. Savio 147", "lat": -33.350201, "lng": -60.2233337 },
        { "name": "Romero", "address": "Pte. Perón 1648", "lat": -33.3642032, "lng": -60.2556918 }
    ],
    "E": [
        { "name": "Almada", "address": "Maipú y J. B. Justo", "lat": -33.3513818, "lng": -60.2191671 },
        { "name": "Catalán", "address": "Almafuerte 442", "lat": -33.3505637, "lng": -60.2161852 },
        { "name": "De La Torre", "address": "Av. A. Illia 643", "lat": -33.3176436, "lng": -60.2335905 },
        { "name": "Girardi", "address": "Av. Savio 1634", "lat": -33.3624522, "lng": -60.1893758 },
        { "name": "Henrich", "address": "9 de Julio 63", "lat": -33.3477973, "lng": -60.2221308 },
        { "name": "Tonon", "address": "Garibaldi 692", "lat": -33.3526134, "lng": -60.2233337 }
    ],
    "F": [
        { "name": "Cantondebat", "address": "Brown 598", "lat": -33.3509076, "lng": -60.2153984 },
        { "name": "Cavara", "address": "Italia y Necochea", "lat": -33.336011, "lng": -60.2105618 },
        { "name": "Fenix", "address": "Garibaldi 281", "lat": -33.334397, "lng": -60.2189803 },
        { "name": "Frattini", "address": "Moreno 108", "lat": -33.3477379, "lng": -60.2432535 },
        { "name": "Prat", "address": "Pte. Perón 1093", "lat": -33.3516786, "lng": -60.2469483 },
        { "name": "Zonta", "address": "Urquiza 422", "lat": -33.3244974, "lng": -60.2296827 }
    ],
    "G": [
        { "name": "Barbotti", "address": "Bolívar 351", "lat": -33.3390941, "lng": -60.2134951 },
        { "name": "Brasesco", "address": "Av. Savio y Pombo", "lat": -33.3602952, "lng": -60.1940232 },
        { "name": "Cesari", "address": "Nación 183", "lat": -33.3473367, "lng": -60.2192951 },
        { "name": "Conde", "address": "Nación 701", "lat": -33.3508228, "lng": -60.2251938 },
        { "name": "Garaguso", "address": "Belgrano 320", "lat": -33.3475795, "lng": -60.2238144 },
        { "name": "Prina", "address": "Av. Arturo Ilia 739", "lat": -33.3151132, "lng": -60.2336927 }
    ],
    "H": [
        { "name": "Blanco", "address": "Almafuerte y Benítez", "lat": -33.3531713, "lng": -60.211823 },
        { "name": "Correa", "address": "Italia 38", "lat": -33.3475696, "lng": -60.2192951 },
        { "name": "Donatelli", "address": "Urquiza 499", "lat": -33.3436723, "lng": -60.2451574 },
        { "name": "Gagliardo", "address": "Pte. Perón 1035", "lat": -33.3516786, "lng": -60.2459375 },
        { "name": "Salvador", "address": "Moreno 220", "lat": -33.3326546, "lng": -60.2275111 },
        { "name": "Tioni", "address": "Rademil y Alvear", "lat": -33.3611786, "lng": -60.1977818 },
        { "name": "Troffe", "address": "Av. Savio 238", "lat": -33.3529776, "lng": -60.2188704 }
    ],
    "I": [
        { "name": "Alonso", "address": "Don Bosco y Pellegrini", "lat": -33.3359915, "lng": -60.2223793 },
        { "name": "Ciminari", "address": "Alberdi 699", "lat": -33.347326, "lng": -60.244442 },
        { "name": "García", "address": "Belgrano 184", "lat": -33.3465186, "lng": -60.2201794 },
        { "name": "Gómez", "address": "Pte. Perón 1366", "lat": -33.3642032, "lng": -60.2556918 },
        { "name": "Leone", "address": "", "lat": -33.3550185, "lng": -60.200088 },
        { "name": "Pza. Sarmiento", "address": "España y Rivadavia", "lat": -33.3325652, "lng": -60.2132468 },
        { "name": "Tonello", "address": "Falcón 651", "lat": -33.3450187, "lng": -60.2216368 }
    ],
    "J": [
        { "name": "Alluchon", "address": "Olleros 55", "lat": -33.3341379, "lng": -60.222751 },
        { "name": "Bongiorno", "address": "Francia y Alberdi", "lat": -33.3452688, "lng": -60.2186529 },
        { "name": "Bracco", "address": "Av. Savio 373", "lat": -33.352152, "lng": -60.2192951 },
        { "name": "Floreani", "address": "Garibaldi y Alem", "lat": -33.3471825, "lng": -60.2186529 },
        { "name": "Pinasco", "address": "Alvear 95", "lat": -33.3508228, "lng": -60.2245289 },
        { "name": "Prado", "address": "M. Cernadas 110", "lat": -33.3538906, "lng": -60.2090475 }
    ],
    "K": [
        { "name": "Andrada", "address": "Av. Savio 601", "lat": -33.3530637, "lng": -60.2168364 },
        { "name": "Lallo", "address": "Balcarce 441", "lat": -33.347391, "lng": -60.2183032 },
        { "name": "Maria E. Barbotti", "address": "Lavalle 618", "lat": -33.3371673, "lng": -60.2313943 },
        { "name": "Maria I. López", "address": "L. Guruciaga 103", "lat": -33.3260773, "lng": -60.2225977 },
        { "name": "Martinelli", "address": "Av. Morteo 74", "lat": -33.354751, "lng": -60.2247367 },
        { "name": "Palau", "address": "Av. Central 2215", "lat": -33.3716893, "lng": -60.1913058 },
        { "name": "Radium", "address": "Nación 352", "lat": -33.3493005, "lng": -60.220919 }
    ],
    "L": [
        { "name": "Baroni", "address": "Av. Irigoyen 1272 - Bº Avamba’e", "lat": -33.375946, "lng": -60.208701 },
        { "name": "Capra", "address": "Moreno 466", "lat": -33.3462705, "lng": -60.2453984 },
        { "name": "Hegouaburu", "address": "Mitre 601", "lat": -33.3514066, "lng": -60.2257666 },
        { "name": "Maccaroni", "address": "Av. Savio 717", "lat": -33.3546378, "lng": -60.215793 },
        { "name": "Menna", "address": "Rivadavia 501", "lat": -33.3509666, "lng": -60.2129951 },
        { "name": "Pucciarelli", "address": "Lavalle 215 bis", "lat": -33.3467543, "lng": -60.2238144 }
    ]
};
