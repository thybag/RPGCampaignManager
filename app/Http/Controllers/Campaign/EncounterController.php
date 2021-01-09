<?php
namespace App\Http\Controllers\Campaign;

use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EncounterController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Campaign::class, 'entity');
    }

    public function index(Campaign $campaign)
    {
        return view('encounter.index', ['campaign' => $campaign, 'mode' => 'encounter']);
    }
}
