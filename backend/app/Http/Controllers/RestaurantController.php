<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function show()
    {
        return response()->json([
            'title' => 'Bebek Carok Salatiga',
            'subtitle' => 'Sensasi Rasa',
            'description' => 'Bebek Carok Metro adalah usaha kuliner yang diprakarsai oleh Tretan Muslim, seorang komedian dan kreator konten asal Indonesia. Terinspirasi oleh kekayaan cita rasa Nusantara, khususnya dari daerah Madura, Tretan Muslim menghadirkan Bebek Carok sebagai sebuah restoran yang mengedepankan hidangan bebek dengan bumbu tradisional dan rempah-rempah autentik.',
            'button' => 'Pesan Sekarang',
            'image' => url('/images/hero.jpg')
        ]);
    }
}
