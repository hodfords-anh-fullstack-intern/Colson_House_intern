<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;
use App\Models\Amenity;
use App\Models\RoomImage;
use Illuminate\Support\Str;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Create Amenities
        $amenityData = [
            ['name' => 'Free High-Speed Wi-Fi', 'icon' => 'Wifi'],
            ['name' => '5-Star Luxury Linen', 'icon' => 'Sparkles'],
            ['name' => 'En-suite Bathroom', 'icon' => 'Bath'],
            ['name' => 'Flat Screen Smart TV', 'icon' => 'Tv'],
            ['name' => 'Complimentary Tea & Coffee', 'icon' => 'Coffee'],
            ['name' => 'Hairdryer', 'icon' => 'Wind'],
            ['name' => 'Cozy Heating', 'icon' => 'Flame'],
            ['name' => 'Dedicated Workspace', 'icon' => 'Laptop'],
        ];

        $amenities = [];
        foreach ($amenityData as $data) {
            $amenities[] = Amenity::create($data);
        }

        // 2. Create Rooms
        $rooms = [
            [
                'name' => 'Deluxe Double Room',
                'description' => 'A spacious and beautifully decorated room featuring a premium king-sized bed, high-quality 5-star linen, and a luxurious en-suite shower. Perfect for couples looking for comfort and style near Brighton Pier.',
                'capacity' => 2,
                'price_per_night' => 120.00,
                'bed_type' => 'King Size',
                'room_size' => 22,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2064.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2088.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2074.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 5, 6]
            ],
            [
                'name' => 'Standard Twin Room',
                'description' => 'Comfortable and inclusive room with two single beds, fresh high-quality linen, and an en-suite bathroom. Ideal for friends or family members traveling together in vibrant Kemp Town.',
                'capacity' => 2,
                'price_per_night' => 110.00,
                'bed_type' => '2 Twin Single Beds',
                'room_size' => 20,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1890-1.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1852-1.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1845-1.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 6]
            ],
            [
                'name' => 'Comfort Triple Room',
                'description' => 'Spacious room accommodating up to three guests, featuring one double bed and one single bed. Complete with premium en-suite facilities, perfect for small groups looking for a beachside stroll.',
                'capacity' => 3,
                'price_per_night' => 150.00,
                'bed_type' => '1 Double + 1 Single',
                'room_size' => 26,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1990.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1985.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1986.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 5, 6]
            ],
            [
                'name' => 'Executive King Suite',
                'description' => 'Our flagship room offering the ultimate Colson House experience. Boasts a massive king bed, custom modern furniture, writing desk, and a large en-suite bathroom with premium luxury amenities.',
                'capacity' => 2,
                'price_per_night' => 175.00,
                'bed_type' => 'Super King Size',
                'room_size' => 30,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1916.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1913.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1915.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 5, 6, 7]
            ],
            [
                'name' => 'Cosy Single Room',
                'description' => 'Perfect for solo travelers and business individuals. Features a comfortable single bed, en-suite shower room, desk workspace, and high-speed Wi-Fi to keep you connected.',
                'capacity' => 1,
                'price_per_night' => 75.00,
                'bed_type' => 'Single Bed',
                'room_size' => 14,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1792.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1782.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1812.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 6, 7]
            ],
            [
                'name' => 'Superior Double Room',
                'description' => 'A beautifully appointed room with a comfortable double bed, elegant decor, and full en-suite bathroom. Enjoy the historic atmosphere of Kemp Town right outside your window.',
                'capacity' => 2,
                'price_per_night' => 130.00,
                'bed_type' => 'Double Bed',
                'room_size' => 20,
                'has_ensuite_bathroom' => true,
                'images' => [
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1684.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1669.jpg',
                    'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1687.jpg'
                ],
                'amenity_indexes' => [0, 1, 2, 3, 4, 5, 6]
            ]
        ];

        foreach ($rooms as $r) {
            $createdRoom = Room::create([
                'name' => $r['name'],
                'slug' => Str::slug($r['name']),
                'description' => $r['description'],
                'capacity' => $r['capacity'],
                'price_per_night' => $r['price_per_night'],
                'bed_type' => $r['bed_type'],
                'room_size' => $r['room_size'],
                'has_ensuite_bathroom' => $r['has_ensuite_bathroom'],
                'is_available' => true,
            ]);

            // Add Images
            foreach ($r['images'] as $index => $imageUrl) {
                RoomImage::create([
                    'room_id' => $createdRoom->id,
                    'image_path' => $imageUrl,
                    'is_primary' => $index === 0,
                ]);
            }

            // Link Amenities
            foreach ($r['amenity_indexes'] as $index) {
                $createdRoom->amenities()->attach($amenities[$index]->id);
            }
        }
    }
}
