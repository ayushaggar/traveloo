<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MarkinsController extends Controller
{
    //
}

use App\Category;

public function create()
{
    $categories = Category::all();

    return view('markins.create', compact('categories'));
}
