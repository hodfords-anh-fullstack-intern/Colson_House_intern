<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\JsonResponse;

class RoomController extends Controller
{
    /**
     * Display a listing of rooms.
     */
    public function index(): JsonResponse
    {
        $rooms = Room::with(['images', 'amenities'])
            ->where('is_available', true)
            ->get();

        return response()->json($rooms);
    }

    /**
     * Display the specified room.
     */
    public function show(string $slug): JsonResponse
    {
        $room = Room::with(['images', 'amenities'])
            ->where('slug', $slug)
            ->where('is_available', true)
            ->first();

        if (!$room) {
            return response()->json(['message' => 'Room not found'], 404);
        }

        return response()->json($room);
    }
}
