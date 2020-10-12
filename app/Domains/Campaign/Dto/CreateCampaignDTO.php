<?php

namespace App\Domains\Campaign\Dto;

use Spatie\DataTransferObject\DataTransferObject;

class CreateCampaignDTO extends DataTransferObject
{
    public string $name;
    public string $description;
}
