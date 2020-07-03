<?php

namespace App\Http\Controllers;

use App\Notice;
use App\Category;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notices = Notice::with('category')->withFilters()->orderBy('created_at','desc')->get();
        return response()->json($notices, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $notice = new Notice();
        $notice->title = $request->title;
        $notice->body = $request->body;
        ($request->category_id === "null") ? 
            $notice->category_id=NULL : $notice->category_id = $request->category_id;

        if($notice->save()) {
            return response()->json($notice, 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function show(Notice $notice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function edit(Notice $notice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notice $notice)
    {
        $notice->title = $request->title;
        $notice->body = $request->body;
        ($request->category_id === "null") ? 
            $notice->category_id=NULL : $notice->category_id = $request->category_id;

        if($notice->save()) {
            return response()->json($notice, 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        if($notice->delete()) {
            return response()-> json([
                'message' => 'Notice deleted successfully',
                'status_code' => 200
            ], 200);
        } else {
            return response()-> json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
