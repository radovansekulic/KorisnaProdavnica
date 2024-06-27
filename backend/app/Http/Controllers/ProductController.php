<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index($id) {
        return Product::find($id);
    }

    public function show() {
        return Product::all();
    }
}
