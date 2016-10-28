<?php

namespace App\Http\Controllers;

use App\Markin;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Config;
use Carbon\Carbon;

class MarkinsController extends Controller
{
      /**
       * Update markin user's control.
       */
      public function storeMarkin(Request $request)
      {

        $user = User::find($request['user']['sub']);

        $markin = new Markin;
        $markin->title = $request->input('title');
        $markin->user_id = $user->id;
        $markin->status = $request->input('status');
        $markin->priority = $request->input('priority');
        $markin->description = $request->input('description');
        $markin->latitude= $request->input('latitude');
        $markin->longitude = $request->input('longitude');
        $markin->save();

        return 'Markin record successfully created with id ' . $markin->markin_id;
      }

      public function getDashboard(Request $request)
      {
          $user = User::find($request['user']['sub']);
          $output = Markin::where('user_id','=',$user->id)->get();
          return $output;
      }
}
