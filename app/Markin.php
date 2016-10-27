<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Markin extends Model
{
  protected $fillable = [
'user_id', 'category_id', 'markin_id', 'title', 'priority', 'description', 'status','when'
];

}
