<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function scopeWithFilters($query)
    {
        return $query->when(count(request()->input('categories', [])), function ($query) {
            $query->whereIn('category_id', request()->input('categories'));
        });
    }

    public function scopeWithSearch($query)
    {
        return $query->where('title', 'like', request()->input('search').'%')
            ->orWhere('body', 'like', request()->input('search').'%')
            ->get();
    }
}
