<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckEmailRequest;
use App\Models\Email; // Pretpostavljamo da koristiš Email model
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function index(CheckEmailRequest $request)
    {
        $emailExists = Email::where('email', $request->email)->exists();

        $emailExists = Email::where('email', $request->email)->exists();

        return $emailExists 
            ? ['message' => 'Email već postoji u bazi.'] : (Email::create(['email' => $request->email]) 
            ? ['message' => 'Uspešno Ste Registrovani'] : ['message' => 'Došlo je do greške prilikom registracije']);

    }
}
