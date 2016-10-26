<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];
}

public function markin()
{
    return $this->hasMany(Markin::class);
}
