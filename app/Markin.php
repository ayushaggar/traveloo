<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Markin extends Model
{
  protected $fillable = [
  'user_id', 'category_id', 'markin_id', 'title', 'priority', 'description', 'status','when','offset',
  'latitude','longitude', 'picture_id',
];

}

public function category()
{
    return $this->belongsTo(Category::class);
}

public function user()
{
    return $this->belongsTo(User::class);
}
