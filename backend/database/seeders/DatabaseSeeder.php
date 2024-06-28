<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Order::create([
            'name' => 'Petar Petrović',
            'product' => 'G lampa RGB Bluetooth zvucnik X1, Čarobna lopta koja se transformiše x2',
            'price' => '6847',
            'email' => 'petar.petrovic@gmail.com',
            'phone' => '+381 61 3994873',
            'adress' => 'Beograd, Knez Mihalova 17'
        ]);

        \App\Models\Order::create([
            'name' => 'Miloš Obilić',
            'product' => 'Mašina Za Vakumiranje Hrane + 10 kesa za vakumiranje X1',
            'price' => '2440',
            'email' => 'milos.obilic@gmail.com',
            'phone' => '+381 61 7882635',
            'adress' => 'Beograd, Knez Mihalova 24'
        ]);

        \App\Models\Product::create([
            'name' => 'Čarobna lopta koja se transformiše',
            'price' => '1799',
            'false_price' => '2500',
            'description' => 'Baci disk, a uhvati loptu! Magična igračka u obliku diska, koja se prilikom bacanja u vazduhu transformiše u loptu. Obradujte Vaše dete jer će obožavati ovu zabavnu loptu! Posle ove magične lopte, igra dobacivanja više nikada neće biti ista.',
            'images' => 'ART1 ART2 ART3 ART4',
        ]);

        \App\Models\Product::create([
            'name' => 'G lampa RGB Bluetooth zvucnik',
            'price' => '2799',
            'false_price' => '4500',
            'description' => 'Osvetlite prostor i doživite vrhunsku zabavu s pametnom G RGB lampom! 3u1 funkcionalnost: Bluetooth zvučnik, 10 W bežični punjač i spektakularno RGB svetlo koje prati ritam muzike. Uživajte u čistom zvuku putem Bluetooth 5.0, bez nereda od kablova. Transformišite svoj prostor s 6 režima sinhronizacije svetla, prilagodite boje i stvorite jedinstvenu atmosferu. Kompatibilno sa širokim spektrom uređaja. Savršena kombinacija estetike i funkcionalnosti za inspirativno okruženje.',
            'images' => 'ART5 ART6 ART7 ART8',
        ]);

        \App\Models\Product::create([
            'name' => 'Svetleća lopta za fudbal',
            'price' => '1799',
            'false_price' => '2400',
            'description' => 'Bezbedna za dom, ne oštećuje podove. Odbija se od ivica i prepreka bez rušenja stvari. Svetlosni efekti i zvuci dodaju čaroliju. Idealna za vežbanje veština. Prečnik 18 cm, visina 6 cm. Radi na 4 AA baterije (nisu uključene). Zabava za celu porodicu.',
            'images' => 'ART9 ART10 ART11 ART12',
        ]);

        \App\Models\Product::create([
            'name' => 'Mašina Za Vakumiranje Hrane + 10 kesa za vakumiranje',
            'price' => '1990',
            'false_price' => '3400',
            'description' => 'S ovom vakuumskom mašinom, možete brzo i jednostavno vakumirati razne vrste mesa, kao što su piletina, svinjetina i junetina, čime produžavate njihovu svježinu. Također možete koristiti ovu mašinu kako biste spakovali preostalu hranu. Iako radi na struju, efikasna je i štedi vam novac.',
            'images' => 'ART13 ART14 ART15 ART16',
        ]);

        \App\Models\Product::create([
            'name' => 'Magična leteća loptica',
            'price' => '1799',
            'false_price' => '2200',
            'description' => 'Da biste napunili ovu lopticu putem USB-a, potrebno je samo pola sata, a zatim ćete se zabavljati čitav dan! Efikasna i kvalitetna za beskrajnu zabavu, igru i smeh!',
            'images' => 'ART17 ART18 ART19 ART20',
        ]);
    }
}
