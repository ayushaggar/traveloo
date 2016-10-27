<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Markin extends Model
{

  protected $fillable = ['title', 'priority', 'description', 'status','when'];

  public function User(){
      return $this->belongsTo('App\User');
    }
}
