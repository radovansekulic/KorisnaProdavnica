<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Email;

class EmailController extends Controller
{
    public function index(Request $req)
    {
        Email::create([
            'email' => $req['email'],
        ]);

        return ["message" => "Uspešno Ste Registrovani"];
    }
}
