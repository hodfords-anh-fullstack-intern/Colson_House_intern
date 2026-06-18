<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'capacity',
        'price_per_night',
        'bed_type',
        'room_size',
        'has_ensuite_bathroom',
        'is_available'
    ];

    /**
     * Get the images for the room.
     */
    public function images(): HasMany
    {
        return $this->hasMany(RoomImage::class);
    }

    /**
     * Get the amenities for the room.
     */
    public function amenities(): BelongsToMany
    {
        return $this->belongsToMany(Amenity::class, 'room_amenity');
    }
}
