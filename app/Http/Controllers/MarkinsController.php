<?php

namespace App\Http\Controllers;

use App\Markin;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Config;
use Firebase\JWT\JWT;
use Carbon\Carbon;

class MarkinsController extends Controller
{

      /**
       * Update markin user's control.
       */
      public function storeMarkin(Request $request)
      {
        $markin = new Markin;

        $markin->title = $request->input('title');

        $markin->status = $request->input('status');
        $markin->priority = $request->input('priority');
        $markin->description = $request->input('description');
        $markin->save();

        return 'Markin record successfully created with id ' . $markin->markin_id;
      }
}
