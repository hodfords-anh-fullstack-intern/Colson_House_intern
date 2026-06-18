<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;
use App\Models\Amenity;
use App\Models\RoomImage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate existing tables to avoid duplicate keys/errors
        Room::truncate();
        Amenity::truncate();
        RoomImage::truncate();
        \Illuminate\Support\Facades\DB::table('room_amenity')->truncate();

        // 1. Raw Room Data (Only number, name, description, amenities_string)
        $roomsData = [
            [
                'number' => 1,
                'name' => 'Room 1, Deluxe Double Room',
                'description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • LCD/Plasma Television • Remote Control TV • Shower EnSuite • Tea/Coffee • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Complimentary Toiletries • Digital Television Channels • Flat Screen TV • Fridge • Linen & Towels Supplied • Private Bathroom • Work Desk'
            ],
            [
                'number' => 2,
                'name' => 'Room 2, Four Poster Room',
                'description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Digital Television Channels • Egyptian Cotton Linen • En Suite • Flat Screen TV • Four Poster Bed • Fridge • Private Bathroom • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open'
            ],
            [
                'number' => 3,
                'name' => 'Room 3, Standard Double',
                'description' => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'amenities_string' => 'Central Heating • Daily Housekeeping • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Private Bathroom • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk'
            ],
            [
                'number' => 4,
                'name' => 'Room 4, Deluxe Balcony Room',
                'description' => 'This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Balcony • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Private Bathroom • Remote Control TV • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open'
            ],
            [
                'number' => 5,
                'name' => 'Room 5, Standard Double',
                'description' => 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Digital Television Channels • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Shower EnSuite • Tea/Coffee • Wash Hand Basin EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk with Lamp'
            ],
            [
                'number' => 6,
                'name' => 'Room 6, Deluxe Double',
                'description' => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Private Bathroom • Remote Control TV • Shower EnSuite • Tea/Coffee • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk'
            ],
            [
                'number' => 7,
                'name' => 'Room 7, Small Single',
                'description' => 'A TV, DVD player and tea/coffee making facilities are featured in this room.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Desk Chair • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Heating Throughout Property • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk'
            ],
            [
                'number' => 8,
                'name' => 'Room 8, Deluxe Double',
                'description' => 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Kettle • Private Bathroom • Shower EnSuite • Tea/Coffee • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk'
            ],
            [
                'number' => 9,
                'name' => 'Room 9, Split Level Double',
                'description' => 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
                'amenities_string' => 'ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Linen & Towels Supplied • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk'
            ]
        ];

        // 2. Parse and Create Unique Amenities
        $allUniqueAmenities = [];
        foreach ($roomsData as $rData) {
            $amenityList = explode('•', $rData['amenities_string']);
            foreach ($amenityList as $item) {
                $name = trim($item);
                if (!empty($name) && !in_array($name, $allUniqueAmenities)) {
                    $allUniqueAmenities[] = $name;
                }
            }
        }

        // Map icons for display helper
        $amenityModels = [];
        foreach ($allUniqueAmenities as $amenityName) {
            $icon = 'Check';
            if (Str::contains($amenityName, ['Wi-Fi', 'WI-FI', 'Internet'])) {
                $icon = 'Wifi';
            } elseif (Str::contains($amenityName, ['Bathroom', 'En Suite', 'EnSuite', 'Shower', 'Bath'])) {
                $icon = 'Bath';
            } elseif (Str::contains($amenityName, ['TV', 'Television'])) {
                $icon = 'Tv';
            } elseif (Str::contains($amenityName, ['Tea', 'Coffee', 'Kettle'])) {
                $icon = 'Coffee';
            } elseif (Str::contains($amenityName, ['Hairdryer', 'Wind'])) {
                $icon = 'Wind';
            } elseif (Str::contains($amenityName, ['Heating'])) {
                $icon = 'Flame';
            } elseif (Str::contains($amenityName, ['Desk', 'Laptop'])) {
                $icon = 'Laptop';
            } elseif (Str::contains($amenityName, ['Toiletries', 'Linen', 'Supplied', 'Daily Housekeeping', 'Egyptian Cotton'])) {
                $icon = 'Sparkles';
            }

            $amenityModels[$amenityName] = Amenity::create([
                'name' => $amenityName,
                'icon' => $icon
            ]);
        }

        // 3. Create Rooms, Scan Directories for Local Images, and Link Amenities
        foreach ($roomsData as $rData) {
            $slug = Str::slug($rData['name']);
            
            // Create Room
            $room = Room::create([
                'name' => $rData['name'],
                'slug' => $slug,
                'description' => $rData['description'],
                'is_available' => true,
            ]);

            // Scan directory for local WebP images
            $folderName = ($rData['number'] === 2) ? 'room2' : 'room ' . $rData['number'];
            $roomDirPath = storage_path('app/public/rooms/' . $folderName);
            $imagePaths = [];

            if (File::isDirectory($roomDirPath)) {
                $files = File::files($roomDirPath);
                foreach ($files as $file) {
                    if (in_array(strtolower($file->getExtension()), ['webp', 'jpg', 'jpeg', 'png', 'avif'])) {
                        // Store relative storage path: e.g., 'rooms/room 1/room1.webp'
                        $imagePaths[] = 'rooms/' . $folderName . '/' . $file->getFilename();
                    }
                }
            }

            // Fallback default image if directory is empty
            if (empty($imagePaths)) {
                $imagePaths[] = 'rooms/placeholder.webp';
            }

            // Create RoomImage records
            foreach ($imagePaths as $index => $path) {
                // If it contains the primary file name, e.g. "room1.webp" vs "room1_1.webp"
                $isPrimary = false;
                $filename = basename($path);
                if ($filename === "room" . $rData['number'] . ".webp" || $index === 0) {
                    $isPrimary = true;
                }

                RoomImage::create([
                    'room_id' => $room->id,
                    'image_path' => $path,
                    'is_primary' => $isPrimary
                ]);
            }

            // Attach parsed amenities
            $roomAmenities = explode('•', $rData['amenities_string']);
            foreach ($roomAmenities as $aItem) {
                $aName = trim($aItem);
                if (!empty($aName) && isset($amenityModels[$aName])) {
                    $room->amenities()->attach($amenityModels[$aName]->id);
                }
            }
        }
    }
}
