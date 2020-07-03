<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::withCount(['notices' => function ($query) {
            $query->withFilters();
        }])
        ->get();
        return response()->json($categories, 200);
    }
}
